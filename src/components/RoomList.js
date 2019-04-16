import React from 'react'
import { connect } from "react-redux";
import { roomSubscription } from "../actions/getActions";
import { assignRoomId } from "../actions/authActions";

class RoomList extends React.Component {
    subscribeToRoom =(roomId) =>{
        this.props.roomSubscription(this.props.auth.user,roomId)
        .then(room => {
            this.props.assignRoomId(roomId)
            
        })
        .catch(err => console.log('error on subscribing to room: ', err))
    }
    render () {
        const orderedRooms = [...this.props.get.joinableRooms,    ...this.props.get.joinedRooms].sort((a, b) => a.id > b.id)
        const {roomId} = this.props.auth;
        return (
            <div className="rooms-list">
                <ul>
                <h3>Your rooms:</h3>
                    {orderedRooms.map(room => {
                        const active = room.id === roomId ? 'active' : '';
                        return (
                            <li key={room.id} className={"room " + active}>
                                <a
                                    onClick={() => this.subscribeToRoom(room.id)}
                                    href="#">
                                    # {room.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    get: state.get,
    auth: state.auth
});
export default connect(
    mapStateToProps,
    {roomSubscription, assignRoomId}
  )(RoomList);
