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
    try{
      const {body}=req
       const users=await User.findOne({email:body.email}).populate({path: 'roleid', model: role,})
       const payload={userId:users._id,username:users.name,role:users.roleid.role,email:users.email}
       if(users){
        const verificationpasswrd=await bcryptjs.compare(body.password,users.password)
          if(verificationpasswrd){
            if(users.is_active){
            localstorage('token',gererateAccessToken({payload},"2h"))
             res.json({payload})
              // const tokenverif=jwt.verify(localstorage('token'),process.env.ACCESS_TOKEN)
            }else{
              res.send("verifies votre email <a href=https://mail.google.com/mail/u/0/#inbox >")
              sendEmail(payload.email,payload.token,payload.username,'to activate your account','/api/auth/configiration/')  
            }
            }else res.send("password invalide")
          }else res.send("can't find user")

        }catch(e){
          return res.status(400).send({
            message: e,
          })  
         } 
         
         
              
}
// method : post => url : api/auth/Register =>acces : Public
  exports.Register = async(req, res) => {
  const {body}=req
  if(!body) throw new CatchError(`Remplir tous les champs`,400);
  try
  {
    if(verificationemail(body.email)){
      body.password=await bcryptjs.hash(body.password,10)
      body.token=crypto.randomBytes(32).toString("hex")
      const createuser= await User.create({...body})
      sendEmail(body.email,token,body.name,'to activate your account')  
      res.status(201).json({createuser})
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


  function gererateAccessToken (user,expirestime) {
    return jwt.sign(user,process.env.ACCESS_TOKEN,{expiresIn:expirestime})
   }
   function refreshToken (user) {
    return jwt.sign(user,process.env.REFRESH_TOKEN)
   }
// function de validation email
   function verificationemail(email) {
    return email.match(/^[a-zA-Z0-9_.+]+@[a-zA-Z0-9-.]+\.[a-zA-Z0-9-.]+$/)
   }

// method : post => url : api/auth/login =>acces : Public
  exports.ResetPassword =async (req, res) => 
  {
    const user = await User.findOne({email:req.body.email})
    if(!user) res.send('invalide mail')
        localstorage('verifitoken',gererateAccessToken({id:user._id},"10m"))
        console.log(token)
    sendEmail(user.email,token,user.name,'to reset your password','/api/auth/resetpassword/')  
    res.send("verifies votre email <a href=https://mail.google.com/mail/u/0/#inbox >")
  };
  exports.changepassword =async (req, res) => 
  {
    const decodedToken = jwt.verify(localstorage('verifitoken'),process.env.ACCESS_TOKEN);
    if(!decodedToken)console.log('error  token')
    const userid = decodedToken.id;
    const password=await bcryptjs.hash(req.body.password,10)

    User.updateOne({_id:userid},{password:req.password})
    .then(result=>{res.send(result)})
    .catch(e=>{ console.log(e)}) 
  };
  exports.ForgetPassword  = async(req, res) => 
  {
    const user =await User.findOne({email:req.body.email})
    localstorage('token',gererateAccessToken({id:user._id},"10m"))
    res.json({id:user._id, name:user.name, role:user.roleid.role,token:localstorage('token')})
    sendEmail(user.email,localstorage('token'),user.name,'your password is ','/api/auth/resetpassword/')  

    // sendEmail(user.email,user.token,user.name)  
  }
