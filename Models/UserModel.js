const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create table user

  const user = new Schema({
    name: {
      type: String
    }, 
    email:{
      type: String,
      unique: true
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
    roleid:{type: Schema.Types.ObjectId, ref: 'roles'}

},{timestamps:true})


 module.exports= mongoose.model("users", user);



