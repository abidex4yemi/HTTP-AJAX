import React from 'react';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import { NavBar } from '../../Shared/NavBar/NavBar';
import { Footer } from '../../Shared/Footer/Footer';

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
	}
];

export const HomePage = () => {
	return (
		<React.Fragment>
			<NavBar navLinkArray={navLinkArray} />
			<main>
				<div>
					<section>
						<p>Hi, Welcome to my lovely react app</p>
						<Link to="/friends">See All my friends</Link>
					</section>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
};
