import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { NavBar } from '../../Shared/NavBar/NavBar';
import { Footer } from '../../Shared/Footer/Footer';
import { Form } from '../../Form/Form';
import { Friends } from '../../Friends/Friends';

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

export class FriendsPage extends Component {
	constructor() {
		super();
		this.state = {
			friends: [],
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

	componentDidMount() {
		const url = `${this.baseURL}/friends`;
		this.getAllFriends(url);
	}

	getAllFriends = url => {
		axios
			.get(url)
			.then(res => {
				this.setState(() => ({ friends: res.data }));
			})
			.catch(err => err)
			.finally(err => err);
	};

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
						friends: res.data,
						form: {
							name: '',
							age: '',
							email: '',
							errors: {}
						}
					}));
				})
				.catch(err => err)
				.finally(err => err);
		}
	};

	changeFormToEditMode = () => {
		console.log('edit mode');
	};

	updateFriend = () => {
		console.log('update friend');
	};

	deleteFriend = () => {
		console.log('delete friend');
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
		const { friends, editMode, form } = this.state;

		return (
			<React.Fragment>
				<NavBar navLinkArray={navLinkArray} />
				<main>
					<div>
						<section>
							<div>
								{friends ? (
									<Friends
										friends={friends}
										changeFormToEditMode={this.changeFormToEditMode}
										deleteFriend={this.deleteFriend}
									/>
								) : (
									'No friends....'
								)}
							</div>

							<div>
								<Form
									addNewFriend={this.addNewFriend}
									inputChange={this.inputChange}
									updateFriend={this.updateFriend}
									editMode={editMode}
									{...form}
								/>
							</div>
						</section>
					</div>
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}
