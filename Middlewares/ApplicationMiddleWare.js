const ApplicationMiddleWare = (req,res,next) => {
    console.log("Inside applicationMiddleware")
    next()
}
module.exports = ApplicationMiddleWare