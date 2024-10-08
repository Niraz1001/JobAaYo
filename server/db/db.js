import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connect sucessfully");
    } catch (error) {
        console.log(`erorr is ${error}`)
    }
}

export default connectdb;