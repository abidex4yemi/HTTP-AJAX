import React from 'react';
import uuid from 'uuid';
import { Route } from 'react-router-dom';
import { HomePage } from './components/pages/Homepage/HomePage';
import { FriendsPage } from './components/pages/FriendsPage/FriendsPage';

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
	}
];

export const App = () => {
	return (
		<React.Fragment>
			{routeDetails.map(({ id, path, ComponentToRender }) => (
				<Route key={id} exact path={path} render={props => <ComponentToRender {...props} />} />
			))}
		</React.Fragment>
	);
};
