//1. import mongoose
const mongoose = require ('mongoose')

//2. get connectionString
const connectionString = process.env.connectionString //(RHS connectionString is from .env file, LHS connectionString is variable)

//3. define connection
mongoose.connect(connectionString).then(res=>{
    console.log("Project fair server connected with mongoDB");
}).catch((err) => {
    console.error('Error connecting to MongoDB: ', err.message); // Use 'err' here to catch the error
});