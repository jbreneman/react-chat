import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageUnfurl.css';

export default class Imagify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			furl: false
		};
	}

	_toggleFurl = () => {
		this.setState({ furl: !this.state.furl });
	};

	render() {
		const { furl } = this.state;
		const { url } = this.props;
		const headerClasses = `unfurl__header ${furl ? 'closed': ''}`;
		return (
			<span className="unfurl">
				<span className={headerClasses} onClick={this._toggleFurl}>
					{url}
				</span>
				<a href={url} target="_blank" className="unfurl__link"><img src={url} alt="" /></a>
			</span>
		)
	}
}

Imagify.propTypes = {
	text: PropTypes.string
};