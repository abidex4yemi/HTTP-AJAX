import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

const TextInputStyled = styled.div`margin-bottom: 1rem;`;

const InputStyled = styled.input`
	width: 100%;
	font-size: 1.5rem;
	padding: 0.5rem;
	border: 0;
	border: 1px solid #201c29;
	outline: 0;
	box-sizing: border-box;

	&.is-invalid {
		border-color: #dc3545;
	}
`;

const ErrorStyle = styled.small`
	color: #dc3545;
	font-size: 1.5rem;
`;

export const TextInput = props => {
	const { name, placeholder, labelText, id, type, inputChange, value, error } = props;

	const handleInputChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;

		inputChange(field, value);
	};

	return (
		<TextInputStyled>
			<label htmlFor={id}>{labelText}</label>
			<InputStyled
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
			<ErrorStyle>{error || ''}</ErrorStyle>
		</TextInputStyled>
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
