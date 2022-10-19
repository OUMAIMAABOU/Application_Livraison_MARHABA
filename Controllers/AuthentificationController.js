const CatchError = require('../Utils/CatchError')
const User = require('../Models/UserModel')
const role = require('../Models/RoleModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const localstorage=require('local-storage')
const {sendEmail}= require('../Config/nodemailer')



// method : post => url : api/auth/login =>acces : Public
 exports.Login = async (req,res) => {
    try{
      const {body}=req
       const users=await User.findOne({email:body.email}).populate({path: 'roleid', model: role,})
       if(users){
        const verificationpasswrd=await bcryptjs.compare(body.password,users.password)
          if(verificationpasswrd){
            if(users.is_active){
            localstorage('token',gererateAccessToken({ user_id:users._id},"10m"))
             res.json({id:users._id,
               name:users.name,
               role:users.roleid.role,
              token:localstorage('token')})
              res.redirect('/get')
            }else{
              res.send("verifies votre email <a href=https://mail.google.com/mail/u/0/#inbox >")
              sendEmail(payload.email,payload.token,payload.name)  
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
     if(!body){
      throw new CatchError(`Remplir tous les champs`,400);
     }
   try{
    if(verificationemail(body.email)){
      body.password=await bcryptjs.hash(body.password,10)
      const hashname=await bcryptjs.hash(body.password,10)
      const token =hashname.replace('/', '')
      body.token=token
      const createuser= await User.create({...body})
      sendEmail(body.email,token,body.name)  
      res.status(201).json({createuser})
    }else res.send('invalide mail')
   }catch(e)
   {
    return res.status(400).send({message: e}) 
    }            
  };

  exports.get =  (req,res) => 
  { 
     User.find().populate({
      path: 'roleid',
      model: role,

     }).then(result=>{
      res.send(result)
   }).catch(e=>{
 console.log(e)
})
}   

  // method : put => url : api/auth/configiration/:token =>acces : Public
  exports.verificationtoken =  (req,res) => 
  { 
     User.updateOne({token:req.params.token},{is_active:true}).then(result=>{
             res.send(result)
          }).catch(e=>{
        console.log(e)
      }) 
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
  exports.ResetPassword = (req, res) => 
  {
    res.status(200).send('token welcom to '+req.pramas)     
  };

  exports.ForgetPassword  = async(req, res) => 
  {
    const user =await User.findOne(req.body.email)
    localstorage('token',gererateAccessToken({users},"10m"))
    res.json({id:user._id, name:user.name, role:user.roleid.role,token:localstorage('token')})
    sendEmail(user.email,user.token,user.name)  
  }
