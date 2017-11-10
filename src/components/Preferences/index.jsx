import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Preferences.css';

export default class Preferences extends Component {
	constructor(props) {
		super(props);
		this.state = {
			saveName: JSON.parse(localStorage.getItem('saveName'))
		};
	}

	_changeSaveName = (e) => {
		const {saveName} = this.state;
		localStorage.setItem('saveName', !saveName);
		this.setState({ saveName: !saveName });
	};

	render() {
		const {toggleSettings} = this.props;
		const {saveName} = this.state;

		return (
			<div className="signup preferences">
				<div className="signup__background preferences__background" onClick={toggleSettings}></div>
				<section className="signup__body preferences__body">
					<h2 className="preferences__heading">Preferences</h2>
					<div className="preferences__item">
						<input type="checkbox" id="save-name" value="savename" checked={saveName} className="preferences__checkbox" onChange={this._changeSaveName} /> <label htmlFor="save-name" className="preferences__label">Save Name</label>
					</div>
				</section>
			</div>
		);
	}
}

Preferences.propTypes = {
	toggleSettings: PropTypes.func
};
