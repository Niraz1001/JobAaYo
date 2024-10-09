import mongoose from "mongoose";
import { user } from "./user.model";
import job from "./job.model";
import { application } from "express";

const applicationschema = new mongoose.Schema({
    job:{
        type: mongoose.Types.ObjectId,
        ref: "job",
    },
    applicant:{
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    status:{
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default:"pending"
    }
},{timestamps: true});

const application = mongoose.model("application", applicationschema);

export default application;