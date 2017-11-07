import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Preferences.css';

export default class Preferences extends Component {
	render() {
		return (
			<div className="signup preferences">
				<div className="signup__background preferences__background" onClick={this.props.toggleSettings}></div>
				<section className="signup__body preferences__body">
					<h2 className="preferences__heading">Preferences</h2>
					<div className="preferences__item">
						<input type="checkbox" id="save-name" className="preferences__checkbox" /> <label for="save-name">Save Name</label>
					</div>
				</section>
			</div>
		);
	}
}

Preferences.propTypes = {
	toggleSettings: PropTypes.func
};
