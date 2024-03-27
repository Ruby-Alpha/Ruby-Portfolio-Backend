import  express, { Router }  from "express";
import { addBlog, deleteABlog, deleteBlogs, getAllBlogs, getOneBlog, updateBlogs } from "../controllers/blog.controller.js";
import { addSkills, getSkills, getASkill } from "../controllers/skills.controller.js";
import { addAchievement, deleteAllAchievements, deleteAnAchievement, getAllAchievements, getOneAchievement, updateAchievements } from "../controllers/achievement.controller.js";
import { addExperience, deleteAllExperiences, deleteAnExperience, getAllExperiences, getOneExperience, updateExperiences } from "../controllers/experience.controller.js";
import { addProject, getOneProject, getAllProjects, updateProjects, deleteAProject, deleteAllProjects } from "../controllers/project.controller.js";


export const router = Router()

router.post ('/skills', addSkills);
router.get('/skills', getSkills);
router.get('/skills/:id', getASkill )


router.post('/blogs', addBlog)
router.get('/blogs', getAllBlogs)
router.get('/:id/blogs', getOneBlog)
router.patch('/blogs', updateBlogs)
router.delete('/blogs', deleteBlogs)
router.delete('/:id/blogs', deleteABlog)



router.post ('/', addAchievement)
router.get ('/', getAllAchievements)
//router.get ('/:id', getOneAchievement)
router.patch ('/', updateAchievements)
router.delete ('/', deleteAllAchievements)
router.delete('/:id', deleteAnAchievement)


router.post('/', addExperience);
router.get('/', getAllExperiences);
router.get('/:id', getOneExperience)
router.patch('/', updateExperiences)
router.delete('/', deleteAllExperiences)
router.delete('/:id', deleteAnExperience)


router.post('/', addProject);
router.get('/', getOneProject);
router.get('/:id', getAllProjects);
router.patch('/', updateProjects);
router.delete('/:id',deleteAProject);
router.delete('/', deleteAllProjects);


