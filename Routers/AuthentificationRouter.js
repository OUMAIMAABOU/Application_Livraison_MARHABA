const CatchError = require('../Utils/CatchError')
const Middleware=require('../Middleware/AuthentificationMiddleware')

module.exports = app => {
    const router = require("express").Router();
    const Authentification = require("../Controllers/AuthentificationController.js");
   
       router.post('/login',Authentification.Login)
   //     router.get('/get',Middleware,(req,res)=>{
   //       res.send('hello')
   //   })


       router.post('/register',Authentification.Register)

       router.post('/resetpassword/:token',Authentification.ResetPassword)
       router.put('/configiration/:token',Authentification.verificationtoken)
       router.get('/getall',Authentification.get)


       
    app.use('/api/auth/', router);

  };