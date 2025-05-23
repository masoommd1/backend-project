import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const dbconnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongoDB connected successfully : ${
            dbconnection.connection.host
        }`);
    } catch (error) {
        console.log("mongodb connection failed",error);
        process.exit(1)
    }
}

export default connectDB;