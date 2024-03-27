import { ExperienceModel } from "../model/experience.model.js";


export const addExperience = async(req, res, next) => {
    try {
      // add Recipe to the database
      const createResult = await ExperienceModel.create(req.body);
      // Return response 
      res.json(createResult)
  
    } catch (error) {
     // forward to express error handler
     next(error)
    }
 }

 export const getAllExperiences= async (req, res, next) => {
    try {
        const getAllExperiences= await ExperienceModel.find({});
        res.json(getAllExperiences)
    } catch (error) {
        next(error)
    }
 }
 export const getOneExperience = async(req, res, next) => {
    try {
        const getAnExperience = await ExperienceModel.findById(req.params.id, req.body);
        res.json(getAnExperience)
    } catch (error) {
        next(error)
    }
 }

 export const updateExperiences = async(req, res, next) => {
    try {
        const updateExperiences = await ExperienceModel.updateMany(req.body);
        res.json(updateExperiences)
    } catch (error) {
        
    }
 }
  export const deleteAllExperiences = async(req, res, next) => {
    try {
        const deleteAllExperiences  = await ExperienceModel.deleteMany();
        res.json(deleteAllExperiences )
    } catch (error) {
        next(error)
        
    }
  }

  export const deleteAnExperience = async (req, res, next) => {
   try {
     const deleteAnAchievement = await ExperienceModel.findByIdAndDelete(req.params.id, req.body);
     res.json(deleteAnExperience)
   } catch (error) {
    next(error)
    
   }
     
    };