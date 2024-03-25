import { Router } from "express";
import { addSkills } from "../controllers/skills.controller";

const router= Router()

router.post ('/', addSkills);
router.get('/', getSkills);