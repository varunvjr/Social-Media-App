import {SET_CURRENT_USER,USER_LOGIN_FAIL,USER_LOGIN_REQUEST,USER_LOGOUT} from "../constants/userConstants";


export const userLoginReducer=(state={isAuthenticated:false,user:{}},action)=>{
    switch(action.type){    
        case USER_LOGIN_REQUEST:
            return{
                loading:true
            }
        case SET_CURRENT_USER:
            return {
                loading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case USER_LOGIN_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case USER_LOGOUT:
            return{
                user:{},
                isAuthenticated:false
            }
        
        default:return state
    }

}
