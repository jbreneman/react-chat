import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Preferences.css';
import { setName } from '../../api';

export default class Preferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saveName: JSON.parse(localStorage.getItem('saveName')),
			username: localStorage.getItem('username')
		};
	}

	_changeSaveName = (e) => {
		const {saveName} = this.state;
		localStorage.setItem('saveName', !saveName);
		this.setState({ saveName: !saveName });
	};

	_changeUsername = (e) => {
		const username = e.target.value;
		localStorage.setItem('username', username);
		this.setState({ username });
		setName({ name: username });
		this.props.updateUsername(username);
	};

	render() {
		const {toggleSettings} = this.props;
		const {saveName, username} = this.state;

		return (
			<div className="signup preferences">
				<div className="signup__background preferences__background" onClick={toggleSettings}></div>
				<section className="signup__body preferences__body">
					<h2 className="preferences__heading">Preferences</h2>
					<div className="preferences__item">
						<input type="checkbox" id="save-name" value="savename" checked={saveName} className="preferences__checkbox" onChange={this._changeSaveName} /> <label htmlFor="save-name" className="preferences__check-label">Save Name</label>
					</div>

					<div className="preferences__item">
						<input type="text" id="username" value={username} className="preferences__input" onChange={this._changeUsername} /> <label htmlFor="username" className="preferences__label">Username</label>
					</div>
				</section>
			</div>
		);
	}
}

Preferences.propTypes = {
	toggleSettings: PropTypes.func,
	updateUsername: PropTypes.func
};
