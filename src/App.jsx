import React, { Component } from 'react';
import ChatBody from './components/ChatBody';
import Panel from './components/Panel';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
				{
					id: 0,
					name: 'Chester'
				},
				{
					id: 1,
					name: 'Definitely not a dummy'
				},
				{
					id: 6,
					name: 'Long names are a pain but possible'
				}
			],
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

export default App;
