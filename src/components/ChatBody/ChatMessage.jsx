import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Linkify from 'react-linkify';
import Emojify from 'react-emojione';
import reactStringReplace from 'react-string-replace';
import SpotifyPlayer from 'react-spotify-player';
import Imagify from './Imagify';
import './ChatMessage.css';


export default class ChatMessage extends Component {
	_getTwelveHour = (datetime) => {
		let hours = datetime.getHours();
		let ampm = 'am';

		if (hours > 12) {
			ampm = 'pm';
	        hours -= 12;
	    }

	    if (hours === 0) {
	        hours = 12;
	    }

	    return { hours, ampm };
	};

	_getMonth = (monthNumber) => {
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return months[monthNumber];
	};

	_padNumber = (num) => {
	    return num < 10 ? `0${num}` : num;
	};

	_formatTime = (datetime, shortened = true) => {
		const month = this._getMonth(datetime.getMonth());
		const twelveHour = this._getTwelveHour(datetime);
		const minutes = this._padNumber(datetime.getMinutes());
		const seconds = this._padNumber(datetime.getSeconds())

		if (shortened) {
			return `${twelveHour.hours}:${minutes} ${twelveHour.ampm}`;
		}

		return `${month} ${datetime.getDate()} at ${twelveHour.hours}:${minutes}:${seconds} ${twelveHour.ampm}`;
	};

	render() {
		const {message, preferences} = this.props;
		const formattedTime = this._formatTime(new Date(message.datetime));
		const longTime = this._formatTime(new Date(message.datetime), false);

		let replacedMessage;

		replacedMessage = reactStringReplace(message.text, /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|png|svg))/i, (match, i) => (
			<Imagify url={match} preferences={preferences} key={i} />
		));

		replacedMessage = reactStringReplace(replacedMessage, /((?:https?:\/\/open.spotify.com(?:\/[^\s]+))|(?:spotify(?::[^\s]+)))/g, (match, i) => (
			<SpotifyPlayer
				uri={match}
				size="compact"
				view="coverart"
				theme="black"
				key={i}
			/>
		));

		return (
			<li className="chat-message">
				<span className="chat-message__header">
					<span className="chat-message__name">{message.username}</span>
					<span className="chat-message__time">
						{formattedTime}
						<span className="chat-message__full-time">{longTime}</span>
					</span>
				</span>
				<Linkify properties={{target: '_blank'}}>
					<Emojify>
						<p className="chat-message__message">
							{replacedMessage}
						</p>
					</Emojify>
				</Linkify>
			</li>
		);
	}
}

ChatMessage.propTypes = {
	message: PropTypes.object,
	preferences: PropTypes.object
};