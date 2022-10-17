const CatchError = require('../Utils/CatchError')
const User = require('../Models/UserModel');
const role = require('../Models/RoleModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const localstorage=require('local-storage')
const {sendEmail}= require('../Config/nodemailer')




// method : post => url : api/auth/login =>acces : Public
 exports.Login =  (req,res) => {
    // try{
      const {body}=req
      User.findOne({email:body.email}).then(data=>{
        const payload=data
       if(data){
         bcryptjs.compare(body.password,data.password).then(data =>{
          console.log(data)
          if(data){
            const token=jwt.sign({payload},process.env.SECRET)
            localstorage('token',token)
              res.send(localstorage('token'))
            }
            else{
              res.send('not found')

            }
          }
        )
          .catch(e=>{
             res.send(e)
            })
       }else{
        res.send("not")
       }      
          // res.send("email deja existe")
    }).catch(e=>{
      res.send("im in not login")
  
           }) 
          
   
}
// method : post => url : api/auth/Register =>acces : Public
  exports.Register = (req, res) => {
    const {body}=req
     if(!body){
      throw new CatchError(`Remplir tous les champs`,400);
     }
  //  try{
     bcryptjs.hash(body.password,10).then((hashpassword)=>{
            body.password=hashpassword
           bcryptjs.hash(hashpassword,10).then((hashname)=>{
            const token=hashname.replace('/', '')
            body.token=token
            User.create({...body}).then(()=>{
               res.send('created' )
               sendEmail(body.email,token,body.name)  
              }).catch((err)=>{
               res.send(err)
               
              })     
          })
           })
  //  }catch(e){
  //   new CatchError(e,400)
  //  }
         
           
  };

  // method : put => url : api/auth/configiration/:token =>acces : Public

  exports.verificationtoken =  (req,res) => 
  {
 
          User.updateOne({token:req.params.token},{is_active:true}).then(result=>{
             res.send(result)
          }).catch(e=>{
        console.log(e)
      })
        
  }

// method : post => url : api/auth/login =>acces : Public
  exports.ResetPassword = (req, res) => 
  {
    res.status(200).send('token welcom to '+req.pramas)     
  };





