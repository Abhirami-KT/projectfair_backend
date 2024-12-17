//1. load .env file
require('dotenv').config() //loads .env file content tnto process.env by default

//2. importing express
const express = require('express')

//6. importing cors
const cors = require('cors')

//8. importing db
const db = require('./DB/connection')

//9. importing router
const router = require('./Routes/router')
const ApplicationMiddleWare = require('./Middlewares/ApplicationMiddleWare')

//3. create an application using express
const projectFairServer = express()

//7. middleware configuration
projectFairServer.use(cors())
projectFairServer.use(express.json())
// projectFairServer.use(ApplicationMiddleWare)
projectFairServer.use(router)

//export image to frondend
projectFairServer.use('/uploads',express.static('./uploads'))

//4. port creation
const PORT = 3000 || process.env.PORT

//5. server run
projectFairServer.listen(PORT,()=>{
    console.log("project fair server running on port " + PORT)
})
projectFairServer.get('/',(req,res) => {
    res.send("Welcome to project fair server")
})
