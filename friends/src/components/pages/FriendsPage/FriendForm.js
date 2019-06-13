import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { NavBar } from '../../Shared/NavBar/NavBar';
import { Footer } from '../../Shared/Footer/Footer';
import { Form } from '../../Form/Form';

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
			editMode: false
		};
		this.baseURL = 'http://localhost:5000';
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

	updateFriend = () => {
		console.log('update friend');
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
		const { id } = this.props.match.params;

		return (
			<React.Fragment>
				<NavBar navLinkArray={navLinkArray} />
				<main>
					<div>
						<div>
							{editMode && <h2>Edit Friend</h2>}
							{<h2>Add New Friend</h2>}

							<Form
								{...form}
								inputChange={this.inputChange}
								addNewFriend={this.addNewFriend}
								closeForm={this.closeForm}
								editMode={editMode}
								updateFriend={this.updateFriend}
							/>
						</div>
					</div>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}
