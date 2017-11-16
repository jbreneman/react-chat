import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emojione-picker';
import '../../../node_modules/emojione-picker/css/picker.css';
import './ChatInput.css';
import { sendMessage } from '../../api';

export default class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	_handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			sendMessage({
				text: this.state.text,
				username: this.props.username,
				datetime: new Date()
			});

			this.setState({ text: '' });
			e.target.value = '';
		}
	}

	_updateText = (e) => {
		this.setState({ text: e.target.value });
	}

	render() {
		return (
			<div className="chat-input">
				<input className="chat-input__input" type="text" placeholder="Chat..." onKeyPress={this._handleKeyPress} onInput={this._updateText} />
				<div className="chat-input__picker">
					<EmojiPicker onChange={function(data){
					  console.log("Emoji chosen", data);
					}} />			
				</div>
			</div>
		);
	}
}

ChatInput.propTypes = {
	username: PropTypes.string
};
