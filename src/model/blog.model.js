
import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const blogSchema = new Schema({
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
export const BlogModel = model('Blog', blogSchema, 'blogs');