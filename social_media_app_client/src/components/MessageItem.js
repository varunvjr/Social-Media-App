import React from 'react'
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import DefaultProfileImage from "../images/default-profile-image.jpg"
const MessageItem = ({date,text,profileImage,username}) => {
    console.log("ProfileImage",profileImage);
    let pimage=DefaultProfileImage;
    if(profileImage){
        pimage=profileImage.length>0?profileImage:DefaultProfileImage;
    }
    return (
        <div>
        <li className="list-group-item">
            <img src={pimage} alt={username} height="100" width="100" className="timeline-image"/>
            
            <div className="message-area">
                <Link to="/">@{username} &nbsp;</Link>
                <br/>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MMM YYYY">{date}</Moment>
                </span>
                <p>{text}</p>
                <a href="#/" className="btn btn-danger">Delete</a>
            
            </div>
        </li>
        </div>
    )
}

export default MessageItem
