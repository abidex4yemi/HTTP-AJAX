import React from 'react';
import PropTypes from 'prop-types';

export const TextInput = props => {
	const { name, placeholder, labelText, id, type, onChange, value, error } = props;

	return (
		<div>
			<label htmlFor={id}>{labelText}</label>
			<input type={type} name={name} id={id} value={value} placeholder={placeholder} onChange={onChange} />
			<small>{error}</small>
		</div>
	);
};

TextInput.propTypes = {
	props: PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.string,
		type: PropTypes.string.isRequired,
		labelText: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		onChange: PropTypes.func.isRequired,
		error: PropTypes.string
	})
};

TextInput.defaultProps = {
	type: 'text'
};
