import { ProjectModel } from "../model/projects.model";

export const addProject = async(req, res, next)=>{
    try {
        const createProject = await ProjectModel.create(req.body)
        res.json(createProject)
    } catch (error) {
        next(error)
        
    }
}

export const getProjects = async(req, res, next) => {
    try {
        const getAllProjects = await ProjectModel.find({});
    } catch (error) {
        next(error)
    }
}
export const getProject = async(req, res) => {
    try {
        const getOneProject = await projectModel.find()
    } catch (error) {
        
    }
}