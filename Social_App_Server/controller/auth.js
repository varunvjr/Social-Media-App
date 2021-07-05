import User from "../models/user.js"
import {generateToken} from "../utils/generateToken.js"
export const signin=async()=>{

}

export const signup=async(req,res,next)=>{
    try{
        const user=await User.create(req.body);
        const {id,username,profileImage}=user;
        res.status(200).json({
            id,
            username,
            profileImage,
            token:generateToken(id)
        })
    }catch(err){
        if(err.code===11000){
            err.message="Sorry, that username/email is already being taken"
        }
        return next({
            status:400,
            message:err.message
        })
    }
}