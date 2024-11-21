import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import cors from "cors";


const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
const PORT = process.env.PORT || 5001;
const URL = process.env.Mongodb_URL; 


try{
  mongoose.connect(URL);
  console.log("Mongodb Connected");
}catch(error){
  console.log("error");
}


app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`)
})