import React, { Component } from 'react';
import ChatBody from './components/ChatBody';
import Panel from './components/Panel';
import './App.css';
import { connect, updateUserlist, receiveMessage, allMessages } from './api';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: []
		};

		connect({ id: 33, name: 'test'});

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
	}

	render() {
		const {users, messages} = this.state;

		return (
			<div className="chat">
				<ChatBody messages={messages} />
				<Panel users={users} />
			</div>
		);
	}
}
