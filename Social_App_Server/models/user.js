import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profileImage:{
        type:String,
    }
})
userSchema.pre('save',async(next)=>{
    try{
       if(!this.isModified('password')){
           return next();
       }
        else{
            let hashedPassword=await bcrypt.hash(this.password,10)
            this.password=hashedPassword;
            return next();
        }

    }catch(err){
        next(err); 
    }
})
userSchema.method.comparePassword=async (candidatePassword,next)=>{
    try{
        let isMatch=await bcrypt.compare(candidatePassword,this.password);
        return isMatch;
    }catch(err){
        return next(err);
    }
}
const User=mongoose.model("User",userSchema);
export default User;