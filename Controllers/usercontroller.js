//1. import mongoDB(mongoose)
const mongoose = require('mongoose')

const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

//Register logic
exports.registerAPI = async(req,res)=>{
    console.log("Inside register API");
    const {username,email,password} = req.body;
    //if user already exists in db?
    const existinUser = await users.findOne({email})
    if(existinUser){
        res.status(409).json({message: "User already exists.."})
    }
    else{
        const newUser = new users({
            username:username,
            email:email,
            password:password,
            github:"",
            linkedIn:"",
            profilePic:""
        })
        //to save these details in mongodb
        await newUser.save()
        res.status(200).json("User resgistration successful")
    }
}

//Login logic
exports.loginAPI = async(req,res)=>{
    console.log("Inside login API");
    const {email,password} = req.body;
    try{
        const existinUser = await users.findOne({email,password})
    if(existinUser){
        //generate token if user logged in successfully (_id generated automatically in mongo db)
        const token = jwt.sign({userId:existinUser._id},process.env.jwtKey)
        console.log(token) //token displayed in terminal
        res.status(200).json({currentUser:existinUser,token})//give token to frondend, token available in console

    }
    else{
        res.status(409).json("Incorrect email or password")
    }
    }
    catch(err){
        res.status(409).json(err)
    }
    
}
