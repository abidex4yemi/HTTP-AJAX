import React from 'react';
import PropTypes from 'prop-types';

export const Friend = props => {
	const { name, age, email } = props;

	return (
		<div>
			<div>
				<h1>{name}</h1>
				<h4>{age}</h4>
				<p>{email}</p>
			</div>
		</div>
	);
};

Friend.propTypes = {
	props: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		email: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired
	})
};
