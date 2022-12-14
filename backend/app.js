require('dotenv').config();
const express = require('express');
const cors= require('cors')
const mongoose = require('./Config/dbconfig');
const CatchError = require('./Middleware/CatchErrorMiddleware')
const RouteErrorHandler= require('./Middleware/RouterMiddleware')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


require("./Routers/AuthentificationRouter")(app);
require("./Routers/ClientRouter")(app);
require("./Routers/LivreurRouter")(app);
require("./Routers/ManagementRouter")(app);


app.use(CatchError)
app.use(RouteErrorHandler)

app.listen(process.env.PORT||3030,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})