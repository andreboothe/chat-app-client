import React from 'react'
import { connect } from "react-redux";
import { getAllRooms, roomSubscription } from "./actions/getActions";
import { assignUser, assignRoomId } from "./actions/authActions";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

import { tokenUrl, instanceLocator, betaUser } from './config'

import "./style.css";

class App extends React.Component {
    
    
    componentDidMount() {
        this.initializeChatKit();
    }

    initializeChatKit = () => {
        const chatManager = new ChatManager({
            instanceLocator,
            userId: betaUser,
            tokenProvider: new TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.props.assignUser(currentUser)
            this.props.getAllRooms(currentUser);
        })
        .catch(err => console.log('error on connecting: ', err))
    }
    
    render() {
        
        return (
            <div className="app">
                <RoomList />
                <MessageList />
                <SendMessageForm />
                <NewRoomForm />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    get: state.get,
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { getAllRooms, assignUser, assignRoomId, roomSubscription }
  )(App);
