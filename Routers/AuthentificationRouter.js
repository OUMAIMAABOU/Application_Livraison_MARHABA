const CatchError = require('../Utils/CatchError')
const {verifyToken}=require('../Middleware/AuthentificationMiddleware')
const ls=require('local-storage')
const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app => {    
       router.post('/login',Authentification.Login)
       router.post("/welcome", verifyToken(["Livreure"]), (req, res) => {
         res.json("Welcome "+req.user.payload.name+" " +req.user.payload.role);
       });
       router.post('/register',Authentification.Register)
       router.put('/resetpassword/:token',Authentification.changepassword)
       router.post('/resetpassword',Authentification.ResetPassword)
       router.put('/configiration/:token',Authentification.verificationtoken)
       router.post('/forgetpassword',Authentification.ForgetPassword)



       
    app.use('/api/auth/', router);

  };