import express from "express";
import {createMessage} from "../controller/message.js"
import {isLoggedIn} from "../middleware/auth.js"
const router=express.Router({mergeParams:true});

router.post("/",isLoggedIn,createMessage);

export default router;