import express, { Router } from "express";
import {
  addBlog,
  deleteABlog,
  deleteBlogs,
  getAllBlogs,
  getOneBlog,
  updateBlogs,
} from "../controllers/blog.controller.js";
import {
  addSkills,
  getSkills,
  getASkill,
} from "../controllers/skills.controller.js";
import {
  addAchievement,
  deleteAllAchievements,
  deleteAnAchievement,
  getAllAchievements,
  getOneAchievement,
  updateAchievements,
} from "../controllers/achievement.controller.js";
import {
  addExperience,
  deleteAllExperiences,
  deleteAnExperience,
  getAllExperiences,
  getOneExperience,
  updateExperiences,
} from "../controllers/experience.controller.js";
import {
  addProject,
  getOneProject,
  getAllProjects,
  updateProjects,
  deleteAProject,
  deleteAllProjects,
} from "../controllers/project.controller.js";

export const router = Router();

router.post("/skills", addSkills);
router.get("/skills", getSkills);
router.get("/skills/:id", getASkill);

router.post("/blogs", addBlog);
router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", getOneBlog);
router.patch("/blogs", updateBlogs);
router.delete("/blogs", deleteBlogs);
router.delete("/blogs/:id", deleteABlog);

router.post("/achievements", addAchievement);
router.get("/achievements", getAllAchievements);
router.get ('/achievements/:id', getOneAchievement)
router.patch("/achievements", updateAchievements);
router.delete("/achievements", deleteAllAchievements);
router.delete("/achievements/:id", deleteAnAchievement);

router.post("/experience", addExperience);
router.get("/experience", getAllExperiences);
router.get("/experience/:id", getOneExperience);
router.patch("/experience", updateExperiences);
router.delete("/experience", deleteAllExperiences);
router.delete("/experience/:id", deleteAnExperience);

router.post("/projects", addProject);
router.get("/projects", getOneProject);
router.get("/projects/:id", getAllProjects);
router.patch("/projects/:id", updateProjects);
router.delete("/projects/:id", deleteAProject);
router.delete("/projects", deleteAllProjects);
