import React from 'react'
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import DefaultProfileImage from "../images/default-profile-image.jpg"
const MessageItem = ({date,text,profileImage,username}) => {
    return (
        <div style={{padding:"30px"}}>
            <img src={DefaultProfileImage} alt={username} height="100" width="100" className="timeline-image"/>
            <div className="message-area">
                <Link to="/">@{username} &nbsp;</Link>
                <br/>
                <span className="text-muted">
                    <Moment className="text-muted" format="Do MMM YYYY">{date}</Moment>
                </span>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default MessageItem
