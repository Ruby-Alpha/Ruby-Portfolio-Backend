import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const experienceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },

});
export const ExperienceModel = model('Experience', experienceSchema, 'experiences');