import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBarStyles = styled.header`
	height: 64px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	background: #100e17;
	display: flex;
	display: flex;
	align-items: center;
`;

const ContainerStyles = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
`;

const ListItem = styled.li`
	font-size: 2rem;
	margin-right: 4rem;

	a {
		text-decoration: none;
		color: #fff;
		transition: 0.2s;

		&:hover {
			color: #da1b60;
		}
	}
`;

export const NavBar = props => {
	const { navLinkArray } = props;

	return (
		<NavBarStyles>
			<ContainerStyles>
				<nav>
					<List>
						{navLinkArray.map(({ to, linkText, id }) => {
							return (
								<ListItem key={id}>
									<NavLink to={to}>{linkText}</NavLink>
								</ListItem>
							);
						})}
					</List>
				</nav>
			</ContainerStyles>
		</NavBarStyles>
	);
};

NavBar.propTypes = {
	navLinkArray: PropTypes.array
};
