import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from './components/pages/Homepage/HomePage';
import { FriendsPage } from './components/pages/FriendsPage/FriendsPage';
import { FriendForm } from './components/pages/FriendsPage/FriendForm';
import { NotFound } from './components/pages/NotFound/NotFound';

// page routes data
const routeDetails = [
	{
		id: uuid(),
		path: '/',
		ComponentToRender: HomePage
	},
	{
		id: uuid(),
		path: '/friends',
		ComponentToRender: FriendsPage
	},
	{
		id: uuid(),
		path: '/friends/add',
		ComponentToRender: FriendForm
	},
	{
		id: uuid(),
		path: '/friends/edit/:id',
		ComponentToRender: FriendForm
	},
	{
		id: uuid(),
		path: '',
		ComponentToRender: NotFound
	}
];

export class App extends Component {
	constructor() {
		super();
		this.state = {
			friends: []
		};
		this.baseURL = 'http://localhost:5000';
	}

	componentDidMount() {
		const url = `${this.baseURL}/friends`;
		this.getAllFriends(url);
	}

	updateFriends = data => {
		this.setState(() => ({
			friends: data
		}));
	};

	getAllFriends = url => {
		axios
			.get(url)
			.then(res => {
				this.setState(() => ({ friends: res.data }));
			})
			.catch(err => err)
			.finally(err => err);
	};

	deleteFriend = id => {
		this.setState(prevState => {
			const friend = prevState.friends.find(friend => friend.id === id);
			if (friend) {
				const url = `${this.baseURL}/friends/${friend.id}`;
				axios
					.delete(url)
					.then(res => {
						this.setState(() => ({ friends: res.data }));
					})
					.catch(err => err)
					.finally(err => err);
			}
		});
	};

	render() {
		const { friends } = this.state;

		return (
			<Switch>
				{routeDetails.map(({ id, path, ComponentToRender }) => {
					if (path === '/friends') {
						return (
							<Route
								key={id}
								exact
								path={path}
								render={props => <ComponentToRender {...props} friends={friends} deleteFriend={this.deleteFriend} />}
							/>
						);
					}
					return (
						<Route
							key={id}
							exact
							path={path}
							render={props => (
								<ComponentToRender
									{...props}
									friends={friends}
									editFriendDetails={this.editFriendDetails}
									deleteFriend={this.deleteFriend}
									updateFriends={this.updateFriends}
								/>
							)}
						/>
					);
				})}
			</Switch>
		);
	}
}
