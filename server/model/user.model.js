import mongoose from "mongoose";

const userschema =  new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['student', 'recuiter'],
        default: "student"
    }
})

export const user = mongoose.model("user", userschema)