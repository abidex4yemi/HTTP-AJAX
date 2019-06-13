import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
	color: #fff;
	border: 0;
	height: 40px;
	font-size: 2rem;
	color: #201c29;
	transition: 0.2s;
	cursor: pointer;
`;

export const Button = props => {
	const { labelText, type, onClick, id } = props;

	const handleOnClick = () => {
		id ? onClick(id) : onClick();
	};

	return (
		<ButtonStyled type={type} onClick={handleOnClick}>
			{labelText}
		</ButtonStyled>
	);
};

Button.propTypes = {
	props: PropTypes.shape({
		labelText: PropTypes.string.isRequired,
		type: PropTypes.string,
		onClick: PropTypes.func.isRequired
	})
};
