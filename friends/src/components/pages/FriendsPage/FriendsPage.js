import React from 'react';
import uuid from 'uuid';
import { NavBar } from '../../Shared/NavBar/NavBar';
import { Footer } from '../../Shared/Footer/Footer';
import { Friends } from '../../Friends/Friends';
import styled from 'styled-components';

const FriendsPageStyles = styled.main`min-height: 85.5vh;`;

const ContainerStyles = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 8rem;
`;

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
	return (
		<React.Fragment>
			<NavBar navLinkArray={navLinkArray} />
			<FriendsPageStyles>
				<ContainerStyles>
					<Content>{props.friends ? <Friends {...props} /> : 'No friends....'}</Content>
				</ContainerStyles>
			</FriendsPageStyles>
			<Footer />
		</React.Fragment>
	);
};
