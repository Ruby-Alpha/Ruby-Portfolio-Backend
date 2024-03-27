import mongoose from "mongoose";

const schema = mongoose.Schema;
const userSchema = new schema({
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
        required: false
    }

})

export const UserModel= mongoose.model ('User', userSchema, 'users');