import { SkillsModel } from "../model/skills.model";

export const  addSkills= async(req, res, next) =>{
try {
   const createSkills = await SkillsModel.create(req.body);
   res.json(createSkills ) 
} catch (error) {
    next(error)
}
}

export const getSkills = async (req, res, next) =>{
   try {
    const getAllSkills= await SkillsModel.find({});
    res.json(getAllSkills)
    
   } catch (error) {
    next(error)
   } 
}

export const getASkill = async (req,res, next) => {
    try {
        
    } catch (error) {
      next(error)  
    }
}