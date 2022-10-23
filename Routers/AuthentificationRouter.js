const CatchError = require('../Utils/CatchError')
const {verifyToken}=require('../Middleware/AuthentificationMiddleware')
const ls=require('local-storage')
const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app => {    
       router.post('/login',Authentification.Login)
       router.get("/welcome", verifyToken(), (req, res) => {
         res.json("Bonjour "+req.user.payload.username+",votre rôle est :" +req.user.payload.role);
       });
       router.post('/register',Authentification.Register)
       router.put('/forgetpassword/:token',Authentification.changepassword)
       router.put('/resetpassword',verifyToken(), Authentification.ResetPassword)
       router.put('/configiration/:token',Authentification.verificationtoken)
       router.post('/forgetpassword',Authentification.ForgetPassword)



       
    app.use('/api/auth/', router);

  };