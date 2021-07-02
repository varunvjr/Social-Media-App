import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import {errorHandler} from "./controller/error.js"
dotenv.config();
const app=express();
const PORT=process.env.PORT;
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Social App Server")
})
app.use(bodyParser.json());
app.use((req,res,next)=>{
    let err=new Error("Not found");
    err.status=404;
   next(err);
})
app.use(errorHandler);
app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);
})