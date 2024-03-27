import mongoose from "mongoose";


const schema = mongoose.Schema;

const achievementSchema = new schema({
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
        required: false
    },

});
export const AchievementModel = mongoose.model('Achievement', achievementSchema);
