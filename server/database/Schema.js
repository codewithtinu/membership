const mongoose=require("mongoose");
require("./config");
const schemas=new mongoose.Schema({
    name:String,
    username:String,
    password:Number
})
module.exports=mongoose.model("user-data",schemas);