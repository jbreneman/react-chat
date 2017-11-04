import React, { Component } from 'react';
import ChatBody from './components/ChatBody';
import Panel from './components/Panel';
import './App.css';
import { connect, updateUserlist, receiveMessage } from './api';

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

		/*socket.on('chat message', function(data) {
	
			var message = formatMessage(data);

			$('#messages').append(message);
			$('#chat').scrollTop($('#chat').prop('scrollHeight'));

			if(pageHidden) {
				changeFavicon('img/red-icon.ico?r=' + parseInt(Math.random() * 10000000000));
			}

			if(data.hasOwnProperty('refresh') && data.refresh === true) {
				restart = true;
				$('#messages').append('<li>Refreshing page in 5 seconds.');
				$('#chat').scrollTop($('#chat').prop('scrollHeight'));
				
				$('body').fadeOut(4500);
				window.setTimeout(function() {
					document.location.reload(true);
				}, 5000);
			}

			if(data.hasOwnProperty('newName')) {
				username = data.newName;
			}
		});*/
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
