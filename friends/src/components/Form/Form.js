import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TextInput } from './TextInput';
import { Button } from './Button';

const FormStyled = styled.form``;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;

	button {
		width: 45%;
		border: 1px solid #201c29;
		background: #201c29;
		color: #fff;

		&:hover {
			background: #fff;
			color: #201c29;
		}
	}
`;

export const Form = props => {
	const { name, age, email, errors, inputChange, addNewFriend, updateFriend, closeForm, editMode } = props;

	return (
		<FormStyled>
			<TextInput
				type="text"
				value={name}
				name="name"
				id="name"
				placeholder="Enter friend name..."
				error={errors.name}
				inputChange={inputChange}
			/>

			<TextInput
				type="text"
				value={email}
				id="email"
				name="email"
				placeholder="Enter friend email..."
				error={errors.email}
				inputChange={inputChange}
			/>

			<TextInput
				type="text"
				value={age}
				id="age"
				name="age"
				placeholder="Enter friend age..."
				error={errors.age}
				inputChange={inputChange}
			/>
			{editMode ? (
				<ButtonContainer>
					<Button labelText="Update" type="button" onClick={updateFriend} />
					<Button labelText="Cancel" type="button" onClick={closeForm} />
				</ButtonContainer>
			) : (
				<ButtonContainer>
					<Button labelText="Cancel" type="button" onClick={closeForm} />
					<Button labelText="Add Friend" type="button" onClick={addNewFriend} />
				</ButtonContainer>
			)}
		</FormStyled>
	);
};

Form.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	errors: PropTypes.object,
	inputChange: PropTypes.func.isRequired,
	updateFriend: PropTypes.func.isRequired,
	editMode: PropTypes.bool.isRequired,
	closeForm: PropTypes.func.isRequired
};
