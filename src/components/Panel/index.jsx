import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Panel.css';
import SettingsButton from './SettingsButton';

export default class Panel extends Component {
	render() {
		const {users, toggleSettings, panelActive, togglePanel} = this.props;
		const classes = `panel ${panelActive ? 'active' : ''}`;

		return (
			<aside className={classes}>
				<header className="panel__header">
					<button className="panel__toggle" onClick={togglePanel}>
						{panelActive ? 'Close': 'Menu'}
					</button>
					Online
				</header>
				<ul className="panel__list">
					{users.map((user, index) => {
						return (
							<li key={index} className="panel__list-item">{user.name}</li>
						)
					})}
				</ul>
				<footer className="panel__footer">
					<SettingsButton toggleSettings={toggleSettings} />
				</footer>
			</aside>
		);
	}
}

Panel.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object),
	toggleSettings: PropTypes.func,
	panelActive: PropTypes.bool,
	togglePanel: PropTypes.func
};
