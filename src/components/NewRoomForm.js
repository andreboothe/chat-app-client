import React from 'react'
import { connect } from "react-redux";
import { createRoom } from "../actions/submitActions";
import { getAllRooms } from "../actions/getActions";

class NewRoomForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            roomName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            roomName: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.createRoom(this.props.auth.user,this.state.roomName)
        .then(room => {
            this.props.getAllRooms(this.props.auth.user);
        })
        // .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log("err creating room", this.state.roomName))
        
        this.setState({roomName: ''})
    }
    
    render () {
        return (
            <div className="new-room-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.roomName}
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="Create a room" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { createRoom, getAllRooms }
  )(NewRoomForm);
