import Message from "../models/message.js";
import User from "../models/user.js";
export const createMessage=async(req,res,next)=>{
    try{
        const message=new Message({
            text:req.body.text,
            user:req.params.id
        })
        await message.save();
        const {id}=message;
        const foundUser=await User.findById(req.params.id);
        foundUser.messages.push(id);
        await foundUser.save();
        const foundMessage=await Message.findById(id).populate("user",{
            username:true,
            profileImage:true
        })
        res.status(200).json(foundMessage);
    }catch(err){
        return next(err);
    }
}