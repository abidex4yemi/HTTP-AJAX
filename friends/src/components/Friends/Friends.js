import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const Friends = props => {
	const { friends, deleteFriend, changeFormToEditMode } = props;

	return (
		<section>
			{friends.map(friend => {
				return (
					<Friend key={friend.id} {...friend} deleteFriend={deleteFriend} changeFormToEditMode={changeFormToEditMode} />
				);
			})}
		</section>
	);
};

Friends.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			age: PropTypes.number.isRequired,
			email: PropTypes.string.isRequired
		})
	),
	deleteFriend: PropTypes.func.isRequired,
	changeFormToEditMode: PropTypes.func.isRequired
};
