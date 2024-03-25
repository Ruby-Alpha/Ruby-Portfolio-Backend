import {Schema, model} from "mongoose";

const skillsSchema= new Schema({
    name : {
        type: String,
        required: true
    
    },
    proficiencyLevel:{
        type: String,
        required: true
    }

});
export const SkillsModel = model('skill', skillsSchema, 'recipes');