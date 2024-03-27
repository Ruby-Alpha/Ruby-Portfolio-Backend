;

import mongoose from "mongoose";

const schema = mongoose.Schema;
const projectSchema = new schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    image: {type:String},
    
});

export const ProjectModel= mongoose.model ('Project', projectSchema, 'projects');