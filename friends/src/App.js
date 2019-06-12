import React, { Component } from 'react';
import uuid from 'uuid';
import { Route } from 'react-router-dom';

// Home page routes data
const routeDetails = [
	{
		id: uuid(),
		path: '/',
		ComponentToRender: ''
	},
	{
		id: uuid(),
		path: '/friends',
		ComponentToRender: ''
	}
];

export class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
	}

	render() {
		const { friends } = this.state;

		return (
			<div>
				{routeDetails.map(({ id, path, ComponentToRender }) => (
					<Route key={id} exact path={path} render={props => <ComponentToRender {...props} friends={friends} />} />
				))}
			</div>
		);
	}
}
