import React, { Component } from 'react';
import openSocket from 'socket.io-client';
import ChatBody from './components/ChatBody';
import Panel from './components/Panel';
import './App.css';

const socket = openSocket('http://localhost:8900');

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

		socket.emit('userConnect', { id: 33, name: 'test'});

		socket.on('updateUserlist', users => {
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
