import React from 'react'

function Message(props) {  
    
    return (
        
        <div className={`message ${props.alignRight? 'right': ''}`}>
            <div className="message-username">{props.username}</div>
            <div className="message-text">{props.text}</div>
        </div>
    )
}

export default Message