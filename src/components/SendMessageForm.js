import React from 'react'
import { connect } from "react-redux";
import { sendMessage } from "../actions/submitActions";

class SendMessageForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.props.auth.user, this.props.auth.roomId,this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render() {
        const disabled = !this.props.auth.roomId;
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    disabled={disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { sendMessage }
  )(SendMessageForm);
