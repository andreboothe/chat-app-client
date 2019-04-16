import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux";

import Message from './Message'

class MessageList extends React.Component {
    
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }
    
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
    }
    
    render() {
        const {roomId, user} = this.props.auth;
        if (!roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                        &larr; Join a room!
                    </div>
                </div>
            )
        } 
        return (
            <div className="message-list">
                {this.props.get.messageList.map((message, index) => {
                    
                    return (
                        <Message alignRight={message.senderId === user.id} key={message.id} username={message.senderId} text={message.parts[0].payload.content} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    get: state.get
});
export default connect(
    mapStateToProps,
    {  }
  )(MessageList);
