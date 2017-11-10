import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Panel.css';
import SettingsButton from './SettingsButton';

export default class Panel extends Component {
	render() {
		const {users} = this.props;

		return (
			<aside className="panel">
				<header className="panel__header">
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
					<SettingsButton toggleSettings={this.props.toggleSettings} />
				</footer>
			</aside>
		);
	}
}

Panel.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object),
	toggleSettings: PropTypes.func
};
