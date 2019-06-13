import React, { Component } from 'react';
import axios from 'axios';
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

	getAllFriends = url => {
		axios
			.get(url)
			.then(res => res.json())
			.then(res => {
				this.setState(() => ({ friends: res.dat }));
			})
			.catch(err => err)
			.finally(err => err);
	};

	componentDidMount() {
		const url = 'http://localhost:500/friends';
		this.getAllFriends(url);
	}

	render() {
		const { friends } = this.state;

		return (
			<React.Fragment>
				{routeDetails.map(({ id, path, ComponentToRender }) => (
					<Route key={id} exact path={path} render={props => <ComponentToRender {...props} friends={friends} />} />
				))}
			</React.Fragment>
		);
	}
}
