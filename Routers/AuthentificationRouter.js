const {verifyToken}=require('../Middleware/AuthentificationMiddleware')
const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app =>
{    
  router.post('/register',Authentification.Register)
  router.post('/login',Authentification.Login)
  router.put('/configiration/:token',Authentification.verificationtoken)
  router.put('/resetpassword',verifyToken(), Authentification.ResetPassword)
  router.post('/forgetpassword',Authentification.ForgetPassword)
  router.put('/forgetpassword/:token',Authentification.changepassword)
  router.get("/welcome", verifyToken(),Authentification.welcome)
  app.use('/api/auth/', router);
};