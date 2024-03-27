import { Router } from "express";
import { addAchievement, deleteAllAchievements, deleteAnAchievement, getAllAchievements, getOneAchievement, updateAchievements } from "../controllers/achievement.controller.js";

const router = Router();

router.post ('/', addAchievement)
router.get ('/', getAllAchievements)
router.get ('/:id', getOneAchievement)
router.patch ('/', updateAchievements)
router.delete ('/', deleteAllAchievements)
router.delete('/:id', deleteAnAchievement)

export default  router

