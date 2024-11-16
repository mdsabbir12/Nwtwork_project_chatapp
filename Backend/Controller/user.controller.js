
import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import createTokenandsavecookis from "../jwt/generateToken.js"
export const signup = async (req,res)=>{
    try {
        const{name,email,password,confirmpass}= req.body;
    if (password==!confirmpass)
    {
       return res.status(400).json({message: "password don't match"});
    }
    const user =await  User.findOne({email});
    
    if(user){
       return res.status(400).json({message: "User alredy exix"});
    }
    const hashpassward = await bcrypt.hash(password,10);
    const newuser = await new User({
        name,
        email,
        password: hashpassward,   
    });
    await newuser.save()
    if(newuser){
        createTokenandsavecookis(newuser._id,res);
        res.status(201).json({message: "User register Sucessfully",newuser});
    }
    
    } 
    catch (error) {
         console.log(error);
         res.status(500).json({message: "Server error"});
    }
};