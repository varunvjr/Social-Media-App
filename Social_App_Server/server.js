import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
dotenv.config();
const app=express();
const PORT=process.env.PORT;
app.use(cors());
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("Social App Server")
})

app.use((req,res,next)=>{
    let err=new Error("Not found");
    res.json({
        message:err.message
    })
})
app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);
})