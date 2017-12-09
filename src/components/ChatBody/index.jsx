import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ChatBody.css';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import MobileNav from './MobileNav';

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
		const {messages, preferences, panelActive, togglePanel} = this.props;
		return (
			<main className="chat-body">
				<MobileNav panelActive={panelActive} togglePanel={togglePanel} />
				<ul className="chat-body__list" onScroll={this._handleScroll} ref={(el) => { this.list = el; }}>
					{messages.map(message => {
						return (
							<ChatMessage key={message.id} message={message} preferences={preferences} />
						)
					})}
					<li className="chat-body__list-anchor" ref={(el) => { this.end = el; }}></li>
				</ul>
				<ChatInput username={preferences.username} />
			</main>
		);
	}
}

ChatBody.propTypes = {
	panelActive: PropTypes.bool,
	togglePanel: PropTypes.func,
	messages: PropTypes.arrayOf(PropTypes.object),
	preferences: PropTypes.object
};
