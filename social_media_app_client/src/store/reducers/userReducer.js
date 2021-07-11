import {SET_CURRENT_USER} from "../constants/userConstants";


export const userLoginReducer=(state={isAuthenticated:false,user:{}},action)=>{
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated:Object.keys(action.user).length>0?true:false,
                user:action.user
            }
        default:return state
    }

}