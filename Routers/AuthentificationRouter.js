const CatchError = require('../Utils/CatchError')
const {verifyToken}=require('../Middleware/AuthentificationMiddleware')
const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app => {    
       router.post('/login',Authentification.Login)
      //  router.post("/welcome", verifyToken, (req, res) => {
      //    res.json("Welcome 🙌");
      //  });
       router.post('/register',Authentification.Register)
       router.put('/resetpassword/:token',Authentification.changepassword)
      router.post('/resetpassword',Authentification.ResetPassword)

       router.put('/configiration/:token',Authentification.verificationtoken)


       
    app.use('/api/auth/', router);

  };