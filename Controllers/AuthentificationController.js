const CatchError = require('../Utils/CatchError')
const User = require('../Models/UserModel')
const role = require('../Models/RoleModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const localstorage=require('local-storage')
const {sendEmail}= require('../Config/nodemailer')
const crypto = require("crypto");

// method : post => url : api/auth/login =>acces : Public
exports.Login = async (req,res) => {
  try
  {
    const users=await User.findOne({email:req.body.email}).populate({path: 'roleid', model: role,})
    const payload={userId:users._id,username:users.name,role:users.roleid.role,email:users.email}
    if(users)
    {
      if(await bcryptjs.compare(req.body.password,users.password))
      {
        if(users.is_active)
        {
          localstorage('token',gererateAccessToken({payload},"120m"))
          res.json({payload})
        }else
        {
          const token=crypto.randomBytes(32).toString("hex")
          await User.updateOne({_id:users._id},{token:token})
          res.send("verifies votre email <a href=https://mail.google.com/mail/u/0/#inbox >")
          sendEmail(payload.email,token,payload.username,'to activate your account','/api/auth/configiration/')  
        }
      }else res.send("password invalide")
    }else res.send("can't find user")
  }catch(e){ return res.status(400).send({message:e})  }      
}

// method : post => url : api/auth/Register =>acces : Public
exports.Register = async(req, res) => {
  const {body}=req
  if(!body) throw new CatchError(`Remplir tous les champs`,400);
  try
  {
    if(verificationemail(body.email))
    {
      body.password=await bcryptjs.hash(body.password,10)
      body.token=crypto.randomBytes(32).toString("hex")
      await User.create({...body})
      res.json("verifies votre email <a href=https://mail.google.com/mail/u/0/#inbox >")
      sendEmail(body.email,body.token,body.name,'to activate your account','/api/auth/configiration/') 
     }else res.send('invalide mail')
  }catch(e)
  {
    return res.status(400).send({message: e}) 
  }            
};

// method : put => url : api/auth/configiration/:token =>acces : Public
exports.verificationtoken =  (req,res) => 
{ 
  User.updateOne({token:req.params.token},{is_active:true})
  .then(result=>{res.send(result)})
  .catch(e=>{ console.log(e)}) 
}

// function pour create token 
function gererateAccessToken (user,expirestime) 
{
 return jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:expirestime})
}
 
// function the validation email
function verificationemail(email) 
{
 return email.match(/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/)
}

// method : put => url : api/auth/login =>acces : private
exports.ResetPassword =async (req, res) => 
{
  const userone= await User.findOne({_id:req.user.payload.userId})
  if(await bcryptjs.compare(req.body.password,userone.password))
  {
    User.updateOne({email:req.user.payload.email},{password:await bcryptjs.hash(req.body.passwordnew,10)})
    .then( result=>{res.send(result) })
    .catch(e=>{ res.send(e)})   
  }else res.send('password invalide')
}

// method : put => url : api/auth/forgetpassword/:token =>acces : private
exports.changepassword =async (req, res) => 
{
  const decodedToken = jwt.verify(localstorage('verifitoken'),process.env.ACCESS_TOKEN);
  if(!decodedToken)console.log('error  token')
  User.updateOne({_id:decodedToken.id},{password:await bcryptjs.hash(req.body.password,10)})
  .then(result=>{res.send(result)})
  .catch(e=>{ console.log(e)}) 
};

// method : post => url : api/auth/forgetpassword =>acces : public
exports.ForgetPassword  = async(req, res) => 
{
  const user = await User.findOne({email:req.body.email})
  if(!user) res.send('invalide mail')
  localstorage('verifitoken',gererateAccessToken({id:user._id},"10m"))
  sendEmail(user.email,localstorage('verifitoken'),user.name,'to reset your password','/api/auth/forgetpassword/')  
  res.send("verifies votre email <a href=https://mail.google.com/mail/u/0/#inbox >")   
}

// method : get => url : api/auth/welcome =>acces : private
exports.welcome  = async(req, res) => 
{
  res.json("Bonjour "+req.user.payload.username+",votre rôle est :" +req.user.payload.role)
}

