import { AchievementModel } from "../model/achievement.model.js";

export const addAchievement = async(req, res, next) => {
    try {
      // add Recipe to the database
      const createResult = await AchievementModel.create(req.body);
      // Return response 
      res.json(createResult)
  
    } catch (error) {
     // forward to express error handler
     next(error)
    }
 }

 export const getAllAchievements = async (req, res, next) => {
    try {
        const getAllAchievements = await AchievementModel.find({});
        res.json(getAllAchievements)
    } catch (error) {
        next(error)
    }
 }
 export const getOneAchievement = async(req, res, next) => {
    try {
        const Id = req.params.id
        
        const getOneAchievement = await AchievementModel.findById(Id);
        res.json(getOneAchievement)
    } catch (error) {
        next(error)
    }
 }

 export const updateAchievements = async(req, res, next) => {
    try {
        const updateAchievements = await AchievementModel.updateMany(req.body);
        res.json(updateAchievements)
    } catch (error) {
        
    }
 }
  export const deleteAllAchievements = async(req, res, next) => {
    try {
        const deleteAllAchievements  = await AchievementModel.deleteMany();
        res.json(deleteAllAchievements )
    } catch (error) {
        next(error)
        
    }
  }

  export const deleteAnAchievement = async (req, res, next) => {
   try {
     const deleteAnAchievement = await AchievementModel.findByIdAndDelete(req.params.id);
     res.json(deleteAnAchievement)
   } catch (error) {
    next(error)
    
   }
     
    };