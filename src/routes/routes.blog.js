import { Router } from "express";
import { addBlog, deleteABlog, deleteBlogs, getAllBlogs, getOneBlog, updateBlogs } from "../controllers/blog.controller.js";

const router = Router()

router.post('/', addBlog)
router.get('/', getAllBlogs)
router.get('/', getOneBlog)
router.patch('/', updateBlogs)
router.delete('/', deleteBlogs)
router.delete('/:id', deleteABlog)

export default router