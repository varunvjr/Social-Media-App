 import React,{useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from "react-router-dom"
import Navbar from '../containers/Navbar'
const Dashboard = () => {
    const history=useHistory();
    const userLogin=useSelector(state=>state.userLogin);
    const {isAuthenticated}=userLogin;     
    useEffect(()=>{
        if(!isAuthenticated){
            history.push("/");
        }
    },[history,isAuthenticated])
  
    return (
        <div>
        <Navbar/>
            You Made it!!!
        </div>
    )
}

export default Dashboard
