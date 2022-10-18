const CatchError = require('../Utils/CatchError')

module.exports = app => {
    const router = require("express").Router();
    const Authentification = require("../Controllers/AuthentificationController.js");
   
       router.post('/login',Authentification.Login)

       router.post('/register',Authentification.Register)

       router.post('/resetpassword/:token',Authentification.ResetPassword)
       router.put('/configiration/:token',Authentification.verificationtoken)
       router.get('/getall',Authentification.get)


       
    app.use('/api/auth/', router);

  };