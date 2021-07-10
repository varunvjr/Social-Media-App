import jwt from "jsonwebtoken";

//- Make sure the user is logged in // Authentication 

export const isLoggedIn=async(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1];
        const decode=await jwt.verify(token,process.env.SECRET_KEY);
            if(decode.id===req.params.id){
                return next(); 
            }
            else{
                return next({
                    status:401,
                    message:"Please login first"
                }) 
            }
        
    }catch(err){
       return next({
           status:401,
           message:"Please login first"
       });
    }
    
}


//- Ensure the correct user// Authorization

export const correctUser=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){

        })
    }catch(err){
        return next({
            status:404,
            message:"Unauthorized User"
        })
    }
}
