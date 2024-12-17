//1. import mongoose
const mongoose = require('mongoose')

//2. Schema creation
const userScheme = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    github:{
        type:String,
    },
    linkedIn:{
        type:String,
    },
    profilePic:{
        type:String,
    }
})

//3. Model creation (exact same as mongoDB collection)
const users = mongoose.model('users',userScheme)
module.exports=users