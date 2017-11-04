import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Panel.css';

export default class Panel extends Component {
	render() {
		const {users} = this.props;
		return (
			<aside className="panel">
				<header className="panel__header">
					Users Online
				</header>
				<ul className="panel__list">
					{users.map(user => {
						return (
							<li key={user.id} className="panel__list-item">{user.name}</li>
						)
					})}
				</ul>
			</aside>
		);
	}
}

Panel.propTypes = {
	users: PropTypes.arrayOf(PropTypes.object)
};
