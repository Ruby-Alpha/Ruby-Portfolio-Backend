import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const achievementSchema = new Schema({
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
export const AchievementModel = model('Achievement', achievementSchema);
