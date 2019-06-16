import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { NavBar } from '../../Shared/NavBar/NavBar';

const ContainerStyled = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	text-align: center;
	padding-top: 200px;

	h1 {
		font-size: 4rem;
	}

	p {
		font-size: 3rem;
	}
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
	}
];

export const NotFound = () => (
	<React.Fragment>
		<NavBar navLinkArray={navLinkArray} />
		<main>
			<ContainerStyled>
				<h1>404 Page not found</h1>
				<p>Sorry, that page does not exist.</p>
			</ContainerStyled>
		</main>
	</React.Fragment>
);
