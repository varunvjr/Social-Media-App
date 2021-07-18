import {GET_ALL_MESSAGES_FAIL,GET_ALL_MESSAGES_REQUEST,GET_ALL_MESSAGES_SUCCESS} from "../constants/messageConstants";


export const allMessagesReducer=(state={messages:[]},action)=>{
    switch(action.type){
        case GET_ALL_MESSAGES_REQUEST:
            return{
                loading:true,
                messages:[],
                success:false
            }
        case GET_ALL_MESSAGES_SUCCESS:
            return{
                loading:false,
                messages:action.payload,
                success:true
            }
        case GET_ALL_MESSAGES_FAIL:
            return{
                loading:false,
                error:action.payload,
                success:false
            }
        default:return state;
    }
}