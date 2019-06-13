import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from './TextInput';
import { Button } from './Button';

export const Form = props => {
	const { name, age, email, errors, inputChange, addNewFriend, updateFriend, closeForm, editMode } = props;

	console.log(typeof age + 'dnkcskcn');

	return (
		<form>
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
				<Button labelText="Update Friend details" update type="button" onClick={updateFriend} />
			) : (
				<React.Fragment>
					<Button labelText="Cancel" cancel type="button" onClick={closeForm} />
					<Button labelText="Add Friend" add type="button" onClick={addNewFriend} />
				</React.Fragment>
			)}
		</form>
	);
};

Form.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	email: PropTypes.string,
	errors: PropTypes.object,
	inputChange: PropTypes.func.isRequired,
	updateFriend: PropTypes.func.isRequired,
	editMode: PropTypes.bool.isRequired,
	closeForm: PropTypes.func.isRequired
};
