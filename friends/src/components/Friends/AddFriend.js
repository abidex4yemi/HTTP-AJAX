import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from '../Form/TextInput';

export class AddFriend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friends: this.props,
			form: {
				name: '',
				email: '',
				age: '',
				errors: {}
			}
		};
	}

	inputChange = (field, value) => {
		if (value.trim() !== '') {
			this.setState(prevState => {
				return {
					form: {
						...prevState.form,
						[field]: value
					}
				};
			});
		}
	};

	handleInputChange = evt => {
		const field = evt.target.name;
		const value = evt.target.value;
		this.inputChange(field, value);
	};

	render() {
		const { name, age, email, errors } = this.props;

		return (
			<form>
				<TextInput
					type="text"
					value={name}
					id="name"
					placeholder="Enter friend name..."
					error={errors.name}
					onChange={this.handleInputChange}
				/>

				<TextInput
					type="text"
					value={email}
					id="email"
					placeholder="Enter friend email..."
					error={errors.email}
					onChange={this.handleInputChange}
				/>

				<TextInput
					type="text"
					value={age}
					id="age"
					placeholder="Enter friend age..."
					error={errors.age}
					onChange={this.handleInputChange}
				/>
			</form>
		);
	}
}

AddFriend.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.object)
};
