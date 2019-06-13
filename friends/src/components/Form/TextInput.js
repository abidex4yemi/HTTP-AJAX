import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const TextInput = props => {
	const { name, placeholder, labelText, id, type, inputChange, value, error } = props;

	const handleInputChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;

		inputChange(field, value);
	};

	return (
		<div>
			<label htmlFor={id}>{labelText}</label>
			<input
				type={type}
				name={name}
				id={id}
				value={value}
				placeholder={placeholder}
				onChange={handleInputChange}
				className={classnames('input', {
					'is-invalid': error
				})}
			/>
			<small>{error || ''}</small>
		</div>
	);
};

TextInput.propTypes = {
	props: PropTypes.shape({
		name: PropTypes.string.isRequired,
		value: PropTypes.string,
		type: PropTypes.string,
		labelText: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		inputChange: PropTypes.func.isRequired,
		error: PropTypes.string
	})
};

TextInput.defaultProps = {
	type: 'text'
};
