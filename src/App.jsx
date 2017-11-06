import React, { Component } from 'react';
import SignUp from './components/SignUp';
import ChatBody from './components/ChatBody';
import Panel from './components/Panel';
import './App.css';
import { updateUserlist, receiveMessage, allMessages, userConnect } from './api';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: [],
			username: localStorage.getItem('username')
		};

		updateUserlist(users => {
			this.setState(users);
		});

		receiveMessage(message => {
			const messages = this.state.messages;
			messages.push(message.message);
			this.setState({ messages });
		});

		allMessages(data => {
			this.setState({ messages: data.messages });
		});

		if (this.state.username) {
			userConnect({ name: this.state.username });
		}
	}

	_updateUsername = (username) => {
		this.setState({ username });
	};

	render() {
		const {users, messages, username} = this.state;

		return (
			<div className="chat">
				<ChatBody messages={messages} username={username} />
				<Panel users={users} />
				{!username &&
					<SignUp userUsername={this._updateUsername} />
				}
			</div>
		);
	}
}
