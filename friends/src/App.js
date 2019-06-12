import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}

	render() {
		return <div>Welcome</div>;
	}
}
