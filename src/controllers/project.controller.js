import { ProjectModel } from "../model/project.model.js";

export const addProject = async(req, res, next) => {
    try {
      // add Recipe to the database
      const createResult = await ProjectModel.create(req.body);
      // Return response 
      res.json(createResult)
  
    } catch (error) {
     // forward to express error handler
     next(error)
    }
 }

 export const getAllProjects = async (req, res, next) => {
    try {
        const getAllProjects = await ProjectModel.find({});
        res.json(getAllProjects)
    } catch (error) {
        next(error)
    }
 }
 export const getOneProject = async(req, res, next) => {
    try {
        const getoneProject = await ProjectModel.findById(req.params.id, req.body);
        res.json(getOneProject)
    } catch (error) {
        next(error)
    }
 }

 export const updateProjects = async(req, res, next) => {
    try {
        const updateProjects = await ProjectModel.updateMany(req.body);
        res.json(updateMany)
    } catch (error) {
        
    }
 }
  export const deleteAllProjects = async(req, res, next) => {
    try {
        const deleteAllProjects = await ProjectModel.deleteMany();
        res.json(deleteAllProjects)
    } catch (error) {
        next(error)
        
    }
  }

  export const deleteAProject = async (req, res, next) => {
   try {
     const deleteOneProject = await ProjectModel.findByIdAndDelete(req.params.id, req.body);
     res.json(deleteOneProject)
   } catch (error) {
    next(error)
    
   }
     
    };
  