import { Schema } from "mongoose";

const projectSchema =  new Schema({
    name: {
        type: String,
        description: String,
        image: String 
    },
    frameworks : {
        type: String,
        
    }
})
export const ProjectModel = model('skill', projectSchema, 'recipes');
