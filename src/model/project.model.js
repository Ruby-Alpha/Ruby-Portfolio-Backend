import { Schema } from "mongoose";
import { model } from "mongoose";


const projectSchema = new Schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    image: {type:String, required:true },
    
});

export const ProjectModel= model ('Project', projectSchema, 'projects');