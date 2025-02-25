import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import styled from 'styled-components';
import { NavBar } from '../../Shared/NavBar/NavBar';
import { Footer } from '../../Shared/Footer/Footer';
import { Form } from '../../Form/Form';

const ContainerStyled = styled.div`
	max-width: 1000px;
	margin: 0 auto;
`;

const Content = styled.div`
	width: 300px;
	margin: 200px auto;

	h2 {
		text-align: center;
		margin-bottom: 20px;
		font-size: 2rem;
	}
`;

const FriendFormStyled = styled.main`min-height: 37vh;`;

const navLinkArray = [
	{
		id: uuid(),
		to: '/',
		linkText: 'Home'
	},
	{
		id: uuid(),
		to: '/friends',
		linkText: 'View Friends'
	}
];

export class FriendForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: '',
				email: '',
				age: '',
				errors: {}
			},
			editMode: false,
			friendID: null
		};
		this.baseURL = 'http://localhost:5000';
	}

	componentDidMount() {
		// populate form input if edit mode is true
		// Note: editMode is turned on if
		// url path: /friends/edit/<id>
		// and form input will be populated with friend data
		this.populateFormInput();
	}

	validateInput = ({ name, email, age }) => {
		let errors = {};

		if (name.trim() === '') {
			errors.name = 'Name is required';
		}

		if (email.trim() === '') {
			errors.email = 'Email is required';
		}

		if (age.trim() === '') {
			errors.age = 'Age is required';
		}

		this.setState(prevState => ({
			form: {
				...prevState.form,
				errors
			}
		}));

		return errors;
	};

	addNewFriend = () => {
		const url = `${this.baseURL}/friends`;

		const { name, email, age } = this.state.form;
		const errors = this.validateInput({ name, email, age });

		if (!Object.keys(errors).length) {
			const newFriend = {
				name: name,
				email: email,
				age: parseInt(age, 10)
			};

			// Make a post REQUEST to the server and add new friend object
			axios
				.post(url, newFriend)
				.then(res => {
					this.setState(() => ({
						form: {
							name: '',
							age: '',
							email: '',
							errors: {}
						}
					}));

					this.props.updateFriends(res.data);
					this.props.history.push('/friends');
				})
				.catch(err => err)
				.finally(err => err);
		}
	};

	populateFormInput = () => {
		const { id } = this.props.match.params;
		const findFriendById = this.props.friends.find(friend => friend.id === id);

		if (typeof findFriendById === 'undefined') {
			return this.props.history.push('/friends');
		}

		const { name, email, age } = findFriendById;
		this.setState(prevState => ({
			editMode: !prevState.editMode,
			friendID: id,
			form: {
				name,
				email,
				age,
				errors: {}
			}
		}));
	};

	updateFriend = () => {
		const { friendID, form } = this.state;
		const { name, email, age } = form;
		const url = `${this.baseURL}/friends/${friendID}`;

		// update friends data
		const updatedFriend = {
			id: friendID,
			name,
			email,
			age
		};

		axios
			.put(url, updatedFriend)
			.then(res => {
				this.setState(() => ({
					form: {
						name: '',
						age: '',
						email: '',
						errors: {}
					}
				}));

				this.props.updateFriends(res.data);
				this.props.history.push('/friends');
			})
			.catch(err => err)
			.finally(err => err);
	};

	closeForm = () => {
		this.props.history.push('/friends');
	};

	inputChange = (field, value) => {
		this.setState(prevState => ({
			form: {
				...prevState.form,
				[field]: value
			}
		}));
	};

	render() {
		const { form, editMode } = this.state;

		return (
			<React.Fragment>
				<NavBar navLinkArray={navLinkArray} />
				<FriendFormStyled>
					<ContainerStyled>
						<Content>
							{editMode && <h2>Edit Friend</h2>}
							{!editMode && <h2>Add New Friend</h2>}

							<Form
								{...form}
								inputChange={this.inputChange}
								addNewFriend={this.addNewFriend}
								closeForm={this.closeForm}
								editMode={editMode}
								updateFriend={this.updateFriend}
							/>
						</Content>
					</ContainerStyled>
				</FriendFormStyled>
				<Footer />
			</React.Fragment>
		);
	}
}
