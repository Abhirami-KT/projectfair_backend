//1. import mongoose
const mongoose = require('mongoose')

//2. Schema creation
const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    github:{
        type:String,
        required:true
    },
    website:{
        type:String,
        required:true
    },
    overview:{
        type:String,
        required:true
    },
    projectImg:{
        type:String,
        required:true
    },
    userId:{
        type:String,
    }
})

//3. Model creation (exact same as mongoDB collection)
const projects = mongoose.model('projects',projectSchema)
module.exports = projects