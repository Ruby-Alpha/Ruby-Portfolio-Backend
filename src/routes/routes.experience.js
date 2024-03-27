import { Router } from "express";
import { addExperience, deleteAllExperiences, deleteAnExperience, getAllExperiences, getOneExperience, updateExperiences } from "../controllers/experience.controller.js";

const router = Router()

router.post('/', addExperience);
router.get('/', getAllExperiences);
router.get('/:id', getOneExperience)
router.patch('/', updateExperiences)
router.delete('/', deleteAllExperiences)
router.delete('/:id', deleteAnExperience)

export default router