import mongoose from 'mongoose';


const schema = mongoose.Schema;
const experienceSchema = new schema({
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
       
    },
    startdate:{
        type:String
    
    },
    enddate:{
        type:String
    }

});
export const ExperienceModel = mongoose.model('Experience', experienceSchema, 'experiences');