require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose')
const app = express()
app.use(express.json())

mongoose.connect(process.env.MONG_URL,()=>{
    console.log('connect mongo')
});


app.listen(process.env.PORT||3030,()=>{
    console.log('is connected',process.env.PORT)
})