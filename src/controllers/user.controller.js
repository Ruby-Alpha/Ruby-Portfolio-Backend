import { UserModel } from "../model/user.model.js";

export const addUser = async(req, res, next) => {
    try {
      // add Recipe to the database
      const createResult = await UserModel.create(req.body);
      // Return response 
      res.json(createResult)
  
    } catch (error) {
     // forward to express error handler
     next(error)
    }
 }