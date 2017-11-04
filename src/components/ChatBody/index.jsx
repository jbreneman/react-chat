import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatBody.css';
import ChatInput from './ChatInput';

export default class ChatBody extends Component {
	render() {
		const {messages} = this.props;
		return (
			<main className="chat-body">
				<ul className="chat-body__list">
					{messages.map(message => {
						return (
							<li key={message.id} className="chat-body__list-item">{message.text}</li>
						)
					})}
				</ul>
				<ChatInput />
			</main>
		);
	}
}

ChatBody.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.object)
};
