import React from 'react';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

export const Friends = props => {
	const { friends, deleteFriend, editFriendDetails } = props;
	const { path } = props.match;

	return (
		<section>
			{friends.map(friend => {
				return (
					<Friend
						key={friend.id}
						{...friend}
						deleteFriend={deleteFriend}
						editFriendDetails={editFriendDetails}
						path={path}
					/>
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
	editFriendDetails: PropTypes.func.isRequired
};
