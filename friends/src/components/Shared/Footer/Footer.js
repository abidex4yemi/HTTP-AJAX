import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
	padding: 2rem 0;
	background: #001628;
	color: #fff;
`;

const ContainerStyles = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const Content = styled.div`
	text-align: center;
	font-size: 2rem;
`;

export const Footer = () => {
	return (
		<FooterStyles>
			<ContainerStyles>
				<Content>
					<p>&copy; {new Date().getFullYear()} Made with love by Yemi</p>
				</Content>
			</ContainerStyles>
		</FooterStyles>
	);
};
