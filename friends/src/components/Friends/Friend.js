import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '../Form/Button';

export const Friend = props => {
	const { name, age, email, id, deleteFriend, path } = props;

	const handleDelete = () => {
		deleteFriend(id);
	};

	return (
		<div>
			<div>
				<h1>Name: {name}</h1>
				<h4>Age: {age}</h4>
				<p>Email: {email}</p>
			</div>
			<div>
				<Link to={`${path}/edit/${id}`}>Edit</Link>
				<Button labelText="Delete" delete type="button" onClick={handleDelete} />
			</div>
		</div>
	);
};

Friend.propTypes = {
	props: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		email: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		editFriendDetails: PropTypes.func.isRequired,
		deleteFriend: PropTypes.func.isRequired
	})
};
