const projects = require('../Models/projectSchema');

exports.addProjectAPI = async (req, res) => {
    console.log("Inside Add Project API");

    const { title, language, github, website, overview } = req.body;
    const projectImg = req.file.filename; //from multer middleware
    const userId = req.payload //from jwt middleware
    console.log("projectImg", projectImg)
    console.log("FormData", title, language, github, website, overview, userId)

    try {
        console.log("Inside Try");

        const project = await projects.findOne({ github })
        console.log("existingProject", project)
        if (project) {
            return res.status(409).json({ message: "Project already exists.." });
        }
        else {
            const newProject = new projects({ title, language, github, website, overview, projectImg, userId })
            //to save these details in mongodb
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch (err) {
        res.status(409).json(err)
    }
}

exports.getHomeProject = async (req, res) => {
    console.log("Inside get home project API");

    try {
        console.log("Inside getHomeProject Try");
        const response = await projects.find().limit(3)
        res.status(200).json(response)
    }
    catch (err) {
        res.status(409).json(err)
    }
}

exports.getUserProject = async (req, res) => {
    console.log("Inside get user project API");

    const userId = req.payload //from jwt middleware

    try {
        console.log("Inside get user project Try");

        const response = await projects.find({ userId })
        res.status(200).json(response)
    }
    catch (err) {
        res.status(406).json(err)
    }
}

exports.getAllUserProject = async (req, res) => {

    console.log("Inside get all user project API");

    try {
        console.log("Inside getAllUserProject Try");
        const response = await projects.find()
        res.status(200).json(response)
    }
    catch (err) {
        res.status(409).json(err)
    }
}

exports.editProjectAPI = async (req, res) => {
    console.log("Inside edit Project API");

    const { title, language, github, website, overview, projectImg } = req.body;
    const updateImg = req.file ? req.file.filename : projectImg //from multer middleware
    const userId = req.payload //from jwt middleware
    const { projectId } = req.params
    console.log("updateImg", updateImg)
    console.log("FormData", title, language, github, website, overview, userId)

    try {
        console.log("Inside Try");

        const project = await projects.findByIdAndUpdate(
            { _id: projectId },
            {
                title: title,
                language: language,
                github: github,
                website: website,
                overview: overview,
                projectImg: updateImg,
            }
        )
            //to save these details in mongodb
            await project.save()
            res.status(200).json(project)
        }
    catch (err) {
        res.status(409).json(err)
    }
}

exports.deleteProjectAPI = async(req,res) => {
    console.log("inside delete API")
    const {projectId} = req.params
    console.log(projectId)
    try{
        const project = await projects.findByIdAndDelete({_id:projectId})
        res.status(200).json(project)
    }
    catch(err){
        res.status(406).json(err)
    }
}