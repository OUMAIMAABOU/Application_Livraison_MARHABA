const {verifyToken}=require('../Middleware/AuthentificationMiddleware')
const router = require("express").Router();
const Authentification = require("../Controllers/AuthentificationController.js");
module.exports = app =>
{    
    router.get("/client/me ", verifyToken(['Client']),Authentification.welcome)

  app.use('/api/auth/', router);
};