import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const NavBar = props => {
	const { navLinkArray } = props;

	return (
		<header>
			<div>
				<nav>
					<ul>
						{navLinkArray.map(({ to, linkText, id }) => {
							return (
								<li key={id}>
									<NavLink to={to}>{linkText}</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

NavBar.propTypes = {
	navLinkArray: PropTypes.array
};
