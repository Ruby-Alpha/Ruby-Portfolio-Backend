
import mongoose from "mongoose";

const schema = mongoose.Schema;
const blogSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    link: {
        type:String,
 
    },
    author: {
        type: String,
    }
});
export const BlogModel = mongoose.model('Blog', blogSchema, 'blogs');