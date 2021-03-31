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
      errorMessages: {

      }
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
    axios.post('/api/users/register', this.state)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error);
        })
  };

//   componentDidMount() {
//     axios
//       .get('/api/users/register')
//       .then((res) => {
//         this.setState({
//           response: res.data,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

  render() {
    return (
      <div className="content">
        {this.state.response}
        <form onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.onChange}
          />
          <input 
          type="email"
          name="email" 
          value={this.state.email} 
          placeholder="Enter email" 
          onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Enter password"
            onChange={this.onChange}
          />
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
