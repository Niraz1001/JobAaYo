import mongoose from "mongoose";

const companyschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    location:{
        type: String,
    },
    logo:{
        type: String,
    },
    userid:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},{timestamps: true})

const company = mongoose.model("company", companyschema);

export default company;