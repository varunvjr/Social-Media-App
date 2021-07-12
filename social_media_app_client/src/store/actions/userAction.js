import {USER_LOGIN_FAIL,USER_LOGIN_REQUEST,SET_CURRENT_USER} from "../constants/userConstants";
import axios from "axios";

export const login=(email,password)=>async(dispatch)=>{
    try{
       dispatch({
           type:USER_LOGIN_REQUEST
       })
       const config={
           headers:{
               'Content-Type':'application/json'
           }
       }
       const {data}=await axios.post("http://localhost:5000/api/auth/signin",{email,password},config);
       dispatch({
           type:SET_CURRENT_USER,
           payload:data
       })
       localStorage.setItem("userInfo",JSON.stringify(data))
    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response&&error.response.data.message?error.response.data.message:error.message
        })
    }
}