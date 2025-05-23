import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express"
import connectDB from "./db/dbconnect.js";
import dotenv from "dotenv";



dotenv.config({
    path:'./env'
})


connectDB()   






/*
const app = express()

( async()=>{ // using iffie js for modern and industry approach 
    // An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that runs immediately after it is defined. I  
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${
        DB_NAME
    }`)
    app.on("error",(error)=>{
        console.log("error",error);
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`app is runnning on port ${process.env.PORT}`)
    })
} catch (error) {
    console.log("error",error)
}
})()

*/