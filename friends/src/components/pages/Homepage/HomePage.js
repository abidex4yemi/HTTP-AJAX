import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavBar } from '../../Shared/NavBar/NavBar';
import { Footer } from '../../Shared/Footer/Footer';

const ContainerStyled = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const Content = styled.section`
	text-align: center;
	margin: 200px auto;

	p {
		text-align: center;
		font-size: 4rem;
		margin-bottom: 40px;
	}

	a {
		text-decoration: none;
		border: 0;
		height: 40px;
		color: #201c29;
		font-size: 2rem;
		border: 1px solid #001628;
		text-align: center;
		line-height: 2;
		transition: 0.2s;
		display: inline-block;
		padding: 1rem;

		&:hover {
			background: #001628;
			color: #fff;
		}
	}
`;

const HomePageStyled = styled.main`min-height: 37vh;`;

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
			<HomePageStyled>
				<ContainerStyled>
					<Content>
						<p>Hi, Welcome to my lovely React app</p>
						<Link to="/friends">See All my friends</Link>
					</Content>
				</ContainerStyled>
			</HomePageStyled>
			<Footer />
		</React.Fragment>
	);
};
