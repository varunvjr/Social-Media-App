 import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom"
import Navbar from '../containers/Navbar'
import {allMessages} from "../store/actions/messageAction"
import Loader from './Loader';
import Message from './Message';
import MessageItem from './MessageItem'
const Dashboard = () => {
    const dispatch=useDispatch();
    const history=useHistory();
    const getAllMessages=useSelector(state=>state.getAllMessages);
    const {loading,error,success,messages}=getAllMessages;
    const userLogin=useSelector(state=>state.userLogin);
    const {isAuthenticated,user}=userLogin; 

    useEffect(()=>{
        if(!isAuthenticated){
            history.push("/");
        }
        dispatch(allMessages(user))

    },[history,isAuthenticated,dispatch,user])
  
    return (
        <div>
        <Navbar/>
        {loading&&<Loader/>}
        {error&&<Message variant='danger'>{error}</Message>}
        <div style={{ display: 'flex',
        alignItems: 'center',
        padding:"50px",
        justifyContent: 'center'}}>
        {success&&messages.map(msg=>(
            <MessageItem
            key={msg._id}
            date={msg.createdAt}
            text={msg.text}
            username={msg.user.username}
            profileImage={msg.user.profileImage}
            />
        ))}
        </div>
            
        </div>
    )
}

export default Dashboard
