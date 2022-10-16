const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create table user

  const user = new Schema({
    name:  String, 
    email:String,
    password:String,
    image:String,
    phoneNumber:String,
    adress:String

},{timestamps:true})
 module.exports= mongoose.model("users", user);



