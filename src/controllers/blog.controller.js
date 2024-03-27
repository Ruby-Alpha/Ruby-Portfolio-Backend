import { BlogModel } from "../model/blog.model.js";

export const addBlog = async(req, res, next) => {
    try {
      // add Recipe to the database
      const createResult = await BlogModel.create(req.body);
      // Return response 
      res.json(createResult)
  
    } catch (error) {
     // forward to express error handler
     next(error)
    }
 }

 export const getAllBlogs = async (req, res, next) => {
    try {
        const getAllBlogs = await BlogModel.find({});
        res.json(getAllBlogs)
    } catch (error) {
        next(error)
    }
 }
 export const getOneBlog = async(req, res, next) => {
    try {
        const getOneBlog = await BlogModel.findById(req.params.id, req.body);
        res.json(getOneBlog)
    } catch (error) {
        next(error)
    }
 }

 export const updateBlogs = async(req, res, next) => {
    try {
        const updateBlogs = await BlogModel.updateMany(req.body);
        res.json(updateBlogs)
    } catch (error) {
        
    }
 }
  export const deleteBlogs = async(req, res, next) => {
    try {
        const deleteAllBlogs  = await BlogModel.deleteMany();
        res.json(deleteAllBlogs )
    } catch (error) {
        next(error)
        
    }
  }

  export const deleteABlog = async (req, res, next) => {
   try {
     const deleteABlog = await BlogModel.findByIdAndDelete(req.params.id, req.body);
     res.json(deleteABlog)
   } catch (error) {
    next(error)
    
   }
     
    };