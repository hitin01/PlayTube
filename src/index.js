// require('dotenv').config({ path: './env' })
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        // Jab app.js bana loge tab yahan app.listen() chalega
        console.log("Database connected, ready to start server!");
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
















/* first approach
import express from "express";
const app = express();



; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error: ", error)
        throw error
    }
})()

// ; iffe use for cleaning the code 

*/