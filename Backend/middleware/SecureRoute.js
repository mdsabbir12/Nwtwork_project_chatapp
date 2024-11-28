import jwt from "jsonwebtoken";
import User from "../model/user.model.js";


const SecureRoute=async (req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            res.status(401).json({message:"Not Authorised"});
        }
        const varified=jwt.verify(token, process.env.JWT_TOKEN);
        if(!varified){
            res.status(402).json({message:"Invalaid Token"});
        }
        const user=await User.findById(varified.userId).select("-password");
        if(!user){
            res.status(403).json({message:"User Not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        req.status(501).json({message:"Internal Server Error"});
    }
}

export default SecureRoute;