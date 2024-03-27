import { Schema } from "mongoose";


const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    lastName:{
        type:String,
        required:true
    },
    passsword:{
        type:Number,
        required: true
    }

})

export const UserModel= model ('User', userSchema, 'users');