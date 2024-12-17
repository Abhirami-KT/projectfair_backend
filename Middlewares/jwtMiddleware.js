const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next) => {
    console.log("Inside jwt Middleware")

    try{
        const token = req.headers['authorization'].slice(7) //7=>Bearer (bearer plus a space)
        console.log(token);

        if(token){
            jwtVerification = jwt.verify(token,process.env.jwtKey)  //process.env.jwtKey or "superkey2024"
            console.log(jwtVerification);
            req.payload = jwtVerification.userId
            next();
        }
        else{
            res.status(402).json("Please provide the token")
        }
    }
    catch(err){
        res.status(404).json("Please login")  //token generated only when user logged in successfully
    }
}
module.exports = jwtMiddleware


//token gets generated when user logged in
//Inorder to verify the token we use jwt middleware
//reqHeader slice to get just token and remove Bearer and space
//set userId as verification