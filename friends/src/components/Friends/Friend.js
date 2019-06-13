import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Form/Button';

const FriendStyled = styled.div`
	font-size: 1.6rem;
	margin-bottom: 2rem;
	min-width: 300px;
	height: 300px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover {
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
	}
`;

const ActionsContainerStyled = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 1rem;

	a,
	button {
		width: 40%;
	}

	a {
		border: 0;
		height: 40px;
		color: #201c29;
		font-size: 2rem;
		border: 1px solid #ffc107;
		text-decoration: none;
		text-align: center;
		line-height: 2;
		transition: 0.2s;

		&:hover {
			background: #ffc107;
			color: #fff;
		}
	}

	button {
		border: 1px solid #dc3545;

		&:hover {
			background: #dc3545;
			color: #fff;
		}
	}
`;

const FriendDetails = styled.div`
	padding: 1rem;

	h1,
	h4,
	p {
		margin-bottom: 1.5rem;
	}
`;

export const Friend = props => {
	const { name, age, email, id, deleteFriend, path } = props;

	const handleDelete = () => {
		deleteFriend(id);
	};

	return (
		<FriendStyled>
			<FriendDetails>
				<h1>Name: {name}</h1>
				<h4>Age: {age}</h4>
				<p>Email: {email}</p>
			</FriendDetails>
			<ActionsContainerStyled>
				<Link to={`${path}/edit/${id}`}>Edit</Link>
				<Button labelText="Delete" type="button" onClick={handleDelete} />
			</ActionsContainerStyled>
		</FriendStyled>
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
