 import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from "../store/actions/userAction"
import {useHistory} from "react-router-dom"
const Dashboard = () => {
    const history=useHistory();
    const userLogin=useSelector(state=>state.userLogin);
    const {isAuthenticated}=userLogin;     
    useEffect(()=>{
        if(!isAuthenticated){
            history.push("/");
        }
    },[history,isAuthenticated])
    const dispatch=useDispatch();
    const signoff=()=>{
        dispatch(logout);
    }
    return (
        <div>
            Dashboard
        <button className="btn btn-primary" onClick={signoff}>Logout</button>
        </div>
    )
}

export default Dashboard
