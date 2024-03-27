import  express, { Router }  from "express";


import { addSkills, getSkills, getASkill } from "../controllers/skills.controller.js";

const router= Router()

router.post ('/', addSkills);
router.get('/', getSkills);
router.get('/:id', getASkill )

export default router
