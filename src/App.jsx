import React, { Component } from 'react';
import ChatBody from './components/ChatBody';
import Panel from './components/Panel';
import './App.css';
import { connect, updateUserlist } from './api';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: [
				{
					id: 0,
					text: 'This is a test message'
				},
				{
					id: 1,
					text: 'This is a test message also'
				}
			]
		};

		connect({ id: 33, name: 'test'});

		updateUserlist(users => {
			this.setState(users);
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
