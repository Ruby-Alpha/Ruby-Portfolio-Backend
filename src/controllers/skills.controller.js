import { SkillsModel } from "../model/skills.model.js";

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
      const getoneSkill = await SkillsModel.findById(req.params.id, req.body);
      res.json(getOneSkill)
    } catch (error) {
      next(error)  
    }
}
export const updateSkills = async(req, res, next) => {
  try {
      const updateSkills = await SkillsModel.updateMany(req.body);
      res.json(updateSkills)
  } catch (error) {
      
  }
}
export const deleteAllSkills = async(req, res, next) => {
  try {
      const deleteAllSkills = await SkillsModel.deleteMany();
      res.json(deleteAllSkills)
  } catch (error) {
      next(error)
      
  }
}

export const deleteASkill = async (req, res, next) => {
 try {
   const deleteOneSkill= await SkillsModel.findByIdAndDelete(req.params.id, req.body);
   res.json(deleteOneSkill)
 } catch (error) {
  next(error)
  
 }
}