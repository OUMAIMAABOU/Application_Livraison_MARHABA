const mongoose = require("mongoose");
// create table user

  const user = new mongoose.Schema({
    name: {
      type: String
    }, 
    email:{
      type: String,
      unique: true,
      required: true
    },
    password:String,
    token:String,
    is_active:{
      type: Boolean,
      default: false
    },
    image:String,
    phoneNumber:String,
    adress:String,
    roleid:{type: mongoose.Schema.Types.ObjectId, ref: 'roles'}

},{timestamps:true})

 module.exports= mongoose.model("users", user);



