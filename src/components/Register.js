import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
      user: {
        name: '',
        email: '',
        password: '',
        repeat_password: ''
      },
      regExPatterns: {
        name: /^[a-z\d]{5,25}$/i, // d - meta character for digit
        //eslint-disable-next-line
        email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password: /^[\w@-]{8,20}$/i  // w - any character a-z, A-Z, 0-9, including the _
      },
      errorMessages: []
  };

  onChange = (event) => {
    this.setState({
        user: {
            ...this.state.user,
            [event.target.name]: event.target.value,
        }

    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    axios.post('/api/users/register', this.state.user)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error);
        })
  };

  componentDidMount() {
    this.props.setShowHeader(false);
  }

  render() {
    return (
      <div className="content register">
        {this.state.response}
        <form onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.onChange}
          />
          <p>Username must be alphanumeric and be 5-25 characters long with no spaces.</p>
          <input 
          type="email"
          name="email" 
          value={this.state.email} 
          placeholder="Enter email" 
          onChange={this.onChange}
          />
          <p>Email must be a valid adress, e.g. me@mydomain.com</p>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.onChange}
          />
          <p>Password must alphanumeric (@ _ - are allowed) and be 8-20 characters long with no spaces. </p>
          <input
            type="password"
            name="repeat_password"
            value={this.state.repeat_password}
            placeholder="Confirm password"
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Register a new user"
            className="btn btn-add"
          />
        </form>
      </div>
    );
  }
}

export default Register;
