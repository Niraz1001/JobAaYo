import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
    },
    profile:{
        bio:{type: String},
        phonenumber:{type:String},
        skills:[{type: String}],
        resume:{type: String},
        experience: {type: String},
        address:{type: String},
        profilephoto: {type: String, default: ""},
        company:{type: mongoose.Schema.Types.ObjectId, ref:"company"}
    }

},{timestamps:true})

userschema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

 export const user = mongoose.model("user", userschema)
