import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MobileNav.css';

export default class MobileNav extends Component {
	render() {
		const {togglePanel, panelActive} = this.props;

		return (
			<nav className="mobile-nav">
				<button className="mobile-nav__button" onClick={togglePanel}>
					{panelActive ? 'Close': 'Menu'}
				</button>
			</nav>
		);
	}
}

MobileNav.propTypes = {
	togglePanel: PropTypes.func,
	panelActive: PropTypes.bool
};
