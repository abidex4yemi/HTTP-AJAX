import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: this.props,
      form: {
        name: '',
        email: '',
        age: ''
      }
    };
  }

  render() {
    return(
      <form>
        form goes here
      </form>
    );
  }
}

AddFriend.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object)
}