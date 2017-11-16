import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SettingsButton.css';

export default class SettingsButton extends Component {
	render() {
		return (
			<button className="settings-button" onClick={this.props.toggleSettings}>
				<svg className="icon icon-gear" viewBox="0 0 28 32">
					<path d="M13.998 10.938c-2.794 0-5.061 2.267-5.061 5.063 0 2.793 2.267 5.064 5.061 5.064s5.045-2.271 5.045-5.064c-0-2.796-2.25-5.063-5.045-5.063zM24.145 18.908l-0.912 2.197 1.842 3.617-2.256 2.256-3.701-1.748-2.197 0.902-1.115 3.414-0.143 0.453h-3.188l-1.38-3.854-2.197-0.906-3.622 1.834-2.255-2.254 1.746-3.703-0.905-2.195-3.86-1.26v-3.187l3.856-1.382 0.905-2.193-1.622-3.202-0.214-0.42 2.252-2.252 3.706 1.745 2.194-0.907 1.114-3.412 0.144-0.452h3.188l1.381 3.858 2.191 0.907 3.627-1.838 2.254 2.252-1.746 3.7 0.902 2.198 3.867 1.258v3.186l-3.855 1.387z"></path>
				</svg>
			</button>
		);
	}
}

SettingsButton.propTypes = {
	toggleSettings: PropTypes.func
};