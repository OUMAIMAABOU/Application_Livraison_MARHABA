const CatchError = require('../Utils/CatchError')
const User = require('../Models/UserModel');
const role = require('../Models/RoleModel');

const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const localstorage=require('local-storage')




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
    User.findOne({email:body.email}).then((e)=>{
      if(!e){
          bcryptjs.hash(body.password,10).then((e)=>{
            body.password=e
           User.create({...body}).then(()=>{
               res.send('created' )
              }).catch((err)=>{
               res.send('not created')
              })
          }).catch(e=>{
           res.send('err')
     
          })
      }else{
        res.send("email deja existe")

      }
        
  }).catch(e=>{
    res.send(e)

         })
  };

// method : post => url : api/auth/login =>acces : Public
  exports.ResetPassword = (req, res) => 
  {
    res.status(200).send('token welcom to '+req.pramas)     
  };





