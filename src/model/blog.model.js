
import mongoose from "mongoose";

const schema = mongoose.Schema;
const blogSchema = new schema({
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
export const BlogModel = mongoose.model('Blog', blogSchema, 'blogs');