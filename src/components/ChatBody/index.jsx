import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatBody.css';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

export default class ChatBody extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrolledUp: false
		};

		// TODO: add page hidden handling and refresh state
	}

	componentDidUpdate = () => {
		if (!this.state.scrolledUp) {
			this.end.scrollIntoView(false);
		}
	};

	_handleScroll = () => {
		this.setState({ scrolledUp: !(this.list.scrollHeight - this.list.scrollTop === this.list.clientHeight) });
	};

	render() {
		const {messages, username} = this.props;
		return (
			<main className="chat-body">
				<ul className="chat-body__list" onScroll={this._handleScroll} ref={(el) => { this.list = el; }}>
					{messages.map(message => {
						return (
							<ChatMessage key={message.id} message={message} />
						)
					})}
					<li className="chat-body__list-anchor" ref={(el) => { this.end = el; }}></li>
				</ul>
				<ChatInput username={username} />
			</main>
		);
	}
}

ChatBody.propTypes = {
	messages: PropTypes.arrayOf(PropTypes.object),
	username: PropTypes.string
};
