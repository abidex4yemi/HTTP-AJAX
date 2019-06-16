import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Friend } from './Friend';

const FriendsStyled = styled.section`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Friends = props => {
	const { friends, deleteFriend, editFriendDetails } = props;
	const { path } = props.match;

	return (
		<FriendsStyled>
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
		</FriendsStyled>
	);
};

Friends.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired
		})
	),
	deleteFriend: PropTypes.func.isRequired
};
