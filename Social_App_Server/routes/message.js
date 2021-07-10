import express from "express";
import {createMessage} from "../controller/message.js"
import {isLoggedIn,correctUser} from "../middleware/auth.js"
const router=express.Router({mergeParams:true});

router.post("/",isLoggedIn,correctUser,createMessage);

export default router;