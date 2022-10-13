const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create table user
try{
  const User = new Schema({
    Name:  String, 
    Email:{String,unique},
    Password:String,
    Image:Text,
    PhoneNumber:String,
    Adress:String

},{timestamps:true})
}  catch (error) {
  console.error(error)
}
module.exports= User = mongoose.model("User", User);  


