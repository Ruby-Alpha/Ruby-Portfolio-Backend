
import mongoose from "mongoose";

const schema = mongoose.Schema;
const skillsSchema= new schema({
    name : {
        type: String,
        required: true
    
    },
    proficiencyLevel:{
        type: String,
        required: true
    }

});
export const SkillsModel = mongoose.model('skill', skillsSchema, 'recipes');