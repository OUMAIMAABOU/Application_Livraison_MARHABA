require('dotenv').config();
const express = require('express');
const mongoose = require('./Config/dbconfig');
const CatchError = require('./Middleware/CatchErrorMiddleware')
const RouteErrorHandler= require('./Middleware/RouterMiddleware')

const app = express()

require("./Routers/AuthentificationRouter")(app);

app.use(CatchError)
app.use(RouteErrorHandler)
app.listen(process.env.PORT||3030,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})