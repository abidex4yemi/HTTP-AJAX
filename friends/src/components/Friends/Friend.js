import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Form/Button';

export const Friend = props => {
	const { name, age, email, id, deleteFriend, changeFormToEditMode } = props;

	return (
		<div>
			<div>
				<Button labelText="x" delete type="button" onClick={deleteFriend} id={id} />
			</div>
			<div>
				<h1>Name: {name}</h1>
				<h4>Age: {age}</h4>
				<p>Email: {email}</p>
			</div>
			<div>
				<Button labelText="Edit" edit type="button" onClick={changeFormToEditMode} />
			</div>
		</div>
	);
};

Friend.propTypes = {
	props: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		email: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		changeFormToEditMode: PropTypes.func.isRequired,
		deleteFriend: PropTypes.func.isRequired
	})
};
