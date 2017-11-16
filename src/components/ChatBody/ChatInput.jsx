import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmojiPicker from 'emojione-picker';
import '../../../node_modules/emojione-picker/css/picker.css';
import './ChatInput.css';
import { sendMessage } from '../../api';

export default class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			picker: false
		};
	}

	_handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			sendMessage({
				text: this.state.text,
				username: this.props.username,
				datetime: new Date()
			});

			this.setState({ text: '' });
			e.target.value = '';
		}
	}

	_updateText = (e) => {
		this.setState({ text: e.target.value });
	}

	_togglePicker = (e) => {
		this.setState({ picker: !this.state.picker });
	}

	_insertEmoji = (data) => {
		const text = this.state.text.length > 0 ? `${this.state.text} ${data.shortname}` : data.shortname;
		this.setState({ text });
	};

	render() {
		return (
			<div className="chat-input">
				<input className="chat-input__input" type="text" placeholder="Chat..." value={this.state.text} onKeyPress={this._handleKeyPress} onInput={this._updateText} />
				<button className="chat-input__emoji" onClick={this._togglePicker}>
					<svg className="icon icon-smile" viewBox="0 0 32 32">
						<path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM22 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM10 8c1.105 0 2 1.343 2 3s-0.895 3-2 3-2-1.343-2-3 0.895-3 2-3zM16 28c-5.215 0-9.544-4.371-10-9.947 2.93 1.691 6.377 2.658 10 2.658s7.070-0.963 10-2.654c-0.455 5.576-4.785 9.942-10 9.942z"></path>
					</svg>
				</button>
				<div className={`chat-input__picker ${this.state.picker ? '' : 'hidden'}`}>
					<EmojiPicker onChange={this._insertEmoji} />			
				</div>
			</div>
		);
	}
}

ChatInput.propTypes = {
	username: PropTypes.string
};
