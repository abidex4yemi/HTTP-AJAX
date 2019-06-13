import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const Friends = props => {
	const { friends } = props;

	return (
		<section>
			{friends.map(({ friend }) => {
				return <Friend key={friend.id} {...friend} />;
			})}
		</section>
	);
};

Friends.propTypes = {
	friends: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		email: PropTypes.string.isRequired
	})
};
