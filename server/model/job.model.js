import mongoose from "mongoose";
import { user } from "./user.model";
import { application } from "express";

const jobschema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    requirment:{
        type: string
    },
    salaryrange: {
        type: string,
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "company"
    },
    createby:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "user"
    },
    application:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "application"
    }
},{timestamps: true});

const job = mongoose.model("job", jobschema)

export default job;