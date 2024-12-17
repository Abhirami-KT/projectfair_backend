//1. 
const express = require('express')

//importing userController
const userController = require('../Controllers/usercontroller')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require('../Controllers/projectController')
const multerMiddleware = require('../Middlewares/MulterMiddleware')

//2. create router
const router = express.Router()

router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProject',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.addProjectAPI);

router.get('/api/getAllUserProject',jwtMiddleware,projectController.getAllUserProject);

router.get('/api/getUserProject',jwtMiddleware,projectController.getUserProject);

router.get('/api/getHomeProject',projectController.getHomeProject);

router.put('/api/editProject/:projectId',jwtMiddleware,multerMiddleware.single('projectImg'),projectController.editProjectAPI);

router.delete('/api/deleteProject/:projectId',jwtMiddleware,projectController.deleteProjectAPI);

module.exports = router