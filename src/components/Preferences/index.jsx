import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Preferences.css';
import { setName } from '../../api';

export default class Preferences extends Component {
	constructor(props) {
		super(props);
		this.state = Object.assign({
			saveName: true,
			username: '',
			unfurl: false
		}, JSON.parse(localStorage.getItem('preferences')));
	}

	_changeSaveName = (e) => {
		const {saveName} = this.state;
		this.setState({ saveName: !saveName });

		const newPreferences = Object.assign({}, this.state, {saveName: !saveName});
		this.props.updatePreferences(newPreferences);
		localStorage.setItem('preferences', JSON.stringify(newPreferences));
	};

	_changeUnfurl = (e) => {
		const {unfurl} = this.state;
		this.setState({ unfurl: !unfurl });

		const newPreferences = Object.assign({}, this.state, {unfurl: !unfurl});
		this.props.updatePreferences(newPreferences);
		localStorage.setItem('preferences', JSON.stringify(newPreferences));
	};

	_changeUsername = (e) => {
		const username = e.target.value;
		this.setState({ username });
		setName({ name: username });

		const newPreferences = Object.assign({}, this.state, {username});
		this.props.updatePreferences(newPreferences);

		localStorage.setItem('preferences', JSON.stringify(newPreferences));
	};

	render() {
		const {toggleSettings} = this.props;
		const {saveName, username, unfurl} = this.state;

		return (
			<div className="signup preferences">
				<div className="signup__background preferences__background" onClick={toggleSettings}></div>
				<section className="signup__body preferences__body">
					<button className="preferences__close" onClick={toggleSettings}>Close</button>
					<h2 className="preferences__heading">Preferences</h2>
					<div className="preferences__item">
						<input type="checkbox" id="save-name" value="savename" checked={saveName} className="preferences__checkbox" onChange={this._changeSaveName} /><label htmlFor="save-name" className="preferences__check-label">Save Name</label>
					</div>

					<div className="preferences__item">
						<label htmlFor="username" className="preferences__label">Username</label><input type="text" id="username" value={username} className="preferences__input" onChange={this._changeUsername} />
					</div>

					<div className="preferences__item">
						<input type="checkbox" id="unfurl" value="unfurl" checked={unfurl} className="preferences__checkbox" onChange={this._changeUnfurl} /><label htmlFor="unfurl" className="preferences__check-label">Automatically unfurl images</label>
					</div>
				</section>
			</div>
		);
	}
}

Preferences.propTypes = {
	toggleSettings: PropTypes.func,
	updatePreferences: PropTypes.func
};
