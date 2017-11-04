import React, { Component } from 'react';
import Panel from './components/Panel';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [{
				id: 0,
				name: 'Chesham'
			}]
		};
	}

	render() {
		const {users} = this.state;

		return (
			<div className="chat">
				<Panel users={users} />
			</div>
		);
	}
}

export default App;
