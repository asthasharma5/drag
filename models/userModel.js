
const mongoose = require("mongoose");

const userSchema =  mongoose.Schema({
    firstname:{type : String, },
    lastname: {type : String, },
    photo:{type : String, },
    age: {type : Number, },
    gender: {type : String, },
    phone: {type : Number, required:true, unique:true},
    
})

const User = new mongoose.model("User", userSchema)


module.exports = User

