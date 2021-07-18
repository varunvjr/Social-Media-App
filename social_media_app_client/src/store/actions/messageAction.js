import axios from 'axios';
import {GET_ALL_MESSAGES_FAIL,GET_ALL_MESSAGES_REQUEST,GET_ALL_MESSAGES_SUCCESS} from "../constants/messageConstants";

export const allMessages=(user)=>async(dispatch)=>{
    try{
        const {id,token}=user;
        dispatch({
            type:GET_ALL_MESSAGES_REQUEST
        })
        const config={
            headers:{
                Authorization:`Bearer ${token}`
            }
        }
        const {data}=await axios.get("http://localhost:5000/api/users/"+id+"/messages",config);
        dispatch({
            type:GET_ALL_MESSAGES_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:GET_ALL_MESSAGES_FAIL,
            payload:error.response&&error.response.data.error.message?error.response.data.error.message:error.message
        })
    }
}