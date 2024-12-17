const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        callback(null,`projectImage-${file.originalname}`)
    }
})

const multerMiddleware = multer({storage})

module.exports=multerMiddleware

