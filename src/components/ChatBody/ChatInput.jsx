import React, { Component } from 'react';
import './ChatInput.css';

export default class ChatInput extends Component {
	render() {
		return (
			<input className="chat-input" type="text" placeholder="Chat..." />
		);
	}
}
