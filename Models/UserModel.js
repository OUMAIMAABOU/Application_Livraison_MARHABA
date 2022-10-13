const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create table user
try{
  const User = new Schema({
    Name:  String, 
},{timestamps:true});
module.exports= User = mongoose.model("User", User);  
}  catch (error) {
    console.error(error)
 }

