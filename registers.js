//to define mongoose schema

const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    confirm_password:{
        type:String,
        required: true
    }
})

//create a collection

const Signup= new mongoose.model("Signup", clientSchema);

module.exports= Signup;