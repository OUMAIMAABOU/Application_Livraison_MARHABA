require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose')
const app = express()
app.use(express.json())



require("./Routers/AuthentificationRouter")(app);

app.listen(process.env.PORT||3030,()=>{
    console.log('Port:',process.env.PORT)
})