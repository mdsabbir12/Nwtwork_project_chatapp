import mongoose from "mongoose";

const userschema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true ,lowercase:true },
  password: { type: String, require: true },
  Confirmpass: { type: String, require: true },
},
{
  Timestamps:true //when Create and update 
}

);

const user = mongoose.model("user",userschema);
export default user;