import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import { NavBar } from '../../Shared/NavBar/NavBar';
import { Footer } from '../../Shared/Footer/Footer';
import { Friends } from '../../Friends/Friends';

const navLinkArray = [
	{
		id: uuid(),
		to: '/',
		linkText: 'Home'
	},
	{
		id: uuid(),
		to: '/friends',
		linkText: 'View Friends'
	},
	{
		id: uuid(),
		to: '/friends/add',
		linkText: 'Add Friend'
	}
];

export const FriendsPage = props => {
	const { path } = props.match;

	return (
		<React.Fragment>
			<NavBar navLinkArray={navLinkArray} />
			<main>
				<div>
					{props.friends ? <Friends {...props} /> : 'No friends....'}

					<div>
						<Link to={`${path}/add`}>Add new Friend</Link>
					</div>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};
