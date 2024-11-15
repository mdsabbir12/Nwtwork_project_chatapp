import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()
dotenv.config();
const port = process.env.port || 5001;
const URL = process.env.Mongodb_URL;


try{
  mongoose.connect(URL);
  console.log("Mongodb Connected");
}catch(error){
  console.log("error");
}

app.listen(port, () => {
  console.log(`Server is Running on port ${port}`)
})