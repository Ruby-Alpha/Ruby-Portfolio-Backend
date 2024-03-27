import { Router } from "express"
import { addProject, getOneProject, getAllProjects, updateProjects, deleteAProject, deleteAllProjects } from "../controllers/project.controller.js";


const router = Router();

router.post('/', addProject);
router.get('/', getOneProject);
router.get('/:id', getAllProjects);
router.patch('/', updateProjects);
router.delete('/:id',deleteAProject);
router.delete('/', deleteAllProjects);

export default router 




