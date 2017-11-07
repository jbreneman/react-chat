import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignUp.css';
import { verifyName, receiveVerifyName, userConnect, reconnect } from '../../api';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			classes: 'signup',
			user: {}
		};

		receiveVerifyName(user => {
			if (user.available) {
				localStorage.setItem('username', user.name);
				userConnect(user);
				this.setState({ classes: `${this.state.classes} hidden`});
				this.props.updateUsername(user.name);
			} else {
				this.setState({ message: `${user.name} is already taken, please try another name.` });
			}
		});

		reconnect(user => {
			userConnect(Object.assign({}, user, { reconnect: true }));
			this.setState({ classes: `${this.state.classes} hidden`});
		});
	}

	_onSubmit = (e) => {
		e.preventDefault();
		const name = this.input.value.trim();

		if (name.length > 0) {
			verifyName({ name });
		}
	};

	render() {
		const {message, classes} = this.state;

		return (
			<div className={classes}>
				<div className="signup__background"></div>
				<section className="signup__body">
					<h2 className="signup__heading">Choose Name</h2>
					<form className="signup__form" onSubmit={this._onSubmit}>
						<input type="text" className="signup__input" ref={(el) => { this.input = el; }} />
						<button className="signup__button">Join Chat</button>
					</form>
					<p className="signup__message">{message}</p>
				</section>
			</div>
		);
	}
}

SignUp.propTypes = {
	updateUsername: PropTypes.func
};
