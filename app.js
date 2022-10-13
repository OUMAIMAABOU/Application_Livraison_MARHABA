require('dotenv').config();
const express = require('express');

const app = express()
const mongoose = require('./Config/dbconfig');

 

require("./Routers/AuthentificationRouter")(app);

app.listen(process.env.PORT||3030,()=>{
    console.log('Port:',process.env.PORT)
})