import React, { Component } from 'react';
import SignUp from './components/SignUp';
import Preferences from './components/Preferences';
import ChatBody from './components/ChatBody';
import Panel from './components/Panel';
import { changeFavicon } from './util/change-favicon';
import './App.css';
import { updateUserlist, receiveMessage, allMessages, userConnect, reconnect } from './api';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			messages: [],
			settingsActive: false,
			panelActive: false,
			preferences: JSON.parse(localStorage.getItem('preferences')) || {username: ''}
		};

		updateUserlist(users => {
			this.setState(users);
		});

		receiveMessage(message => {
			const messages = this.state.messages;
			messages.push(message.message);
			this.setState({ messages });

			if (document.hidden) {
				changeFavicon('icons/red-icon.png');
			}

			if (message.refresh) {
				document.body.style.opacity = 0;

				window.setTimeout(() => {
					window.location.reload(true);
				}, 5000);
			}
		});

		allMessages(data => {
			this.setState({ messages: data.messages });
		});

		if (this.state.preferences.username) {
			userConnect({ name: this.state.preferences.username });
		}

		reconnect(() => {
			userConnect({ name: this.state.preferences.username });
		});
	}

	_updatePreferences = (preferences) => {
		this.setState({ preferences });
	};

	_toggleSettings = () => {
		this.setState({ settingsActive: !this.state.settingsActive });
	};

	// TODO: refactor into 1 method ^^
	_togglePanel = () => {
		this.setState({ panelActive: !this.state.panelActive });
	};

	render() {
		const {users, messages, preferences, settingsActive, panelActive} = this.state;

		return (
			<div className="chat">
				<ChatBody messages={messages} username={preferences.username} panelActive={panelActive} togglePanel={this._togglePanel} />
				<Panel users={users} panelActive={panelActive} togglePanel={this._togglePanel} toggleSettings={this._toggleSettings} />
				{!preferences.username &&
					<SignUp updatePreferences={this._updatePreferences} />
				}
				{settingsActive &&
					<Preferences toggleSettings={this._toggleSettings} updatePreferences={this._updatePreferences} />
				}
			</div>
		);
	}
}
