import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => {
	const { labelText, type, onClick, id } = props;

	const handleOnClick = () => {
		id ? onClick(id) : onClick();
	};

	return (
		<button type={type} onClick={handleOnClick}>
			{labelText}
		</button>
	);
};

Button.propTypes = {
	props: PropTypes.shape({
		labelText: PropTypes.string.isRequired,
		type: PropTypes.string,
		onClick: PropTypes.func.isRequired
	})
};
