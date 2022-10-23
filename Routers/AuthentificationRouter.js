const {verifyToken}=require('../Middleware/AuthentificationMiddleware')
const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app => {    
       router.post('/login',Authentification.Login)
       router.post('/register',Authentification.Register)
       router.put('/forgetpassword/:token',Authentification.changepassword)
       router.put('/resetpassword',verifyToken(), Authentification.ResetPassword)
       router.put('/configiration/:token',Authentification.verificationtoken)
       router.post('/forgetpassword',Authentification.ForgetPassword)
       router.get("/welcome", verifyToken(),Authentification.welcome);
    app.use('/api/auth/', router);

  };