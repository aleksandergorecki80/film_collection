import { connect } from 'react-redux';
import axios from 'axios';
import React from 'react';
import { fetchUserData } from '../actions/userActions';

class Login extends React.Component {
    state = { 
        email: '',
        password: ''
     }

     onChangeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
     }

     onSubminHandler = (event) =>{
         event.preventDefault();
         axios
            .post('/api/auth', this.state)
            .then((res) => {
                const userToken = res.headers['x-auth-token'];
                this.props.fetchUserData(userToken);
                localStorage.setItem("token", userToken);
                this.props.history.push({
                    pathname: '/',
                    state: res.data
                  });
            })
            .catch((err) =>{
                console.log(err)
            })
     }

    render() { 
        return ( 
            <div>
               <p> {this.props.location.state ? this.props.location.state :  ''}</p>
                <form onSubmit={this.onSubminHandler}>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Name" 
                        onChange={this.onChangeHandler} 
                    />
                    <input 
                        type="text" 
                        name="password"
                        placeholder="Password" 
                        onChange={this.onChangeHandler} 
                    />
                    <input type="submit" value="Login" className="btn btn-add"/>
                </form>
            </div>
         );
    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
      fetchUserData: (userToken) => {
        dispatch(fetchUserData(userToken));
      },
    };
  };
  export default connect(null, mapDispatchToProps)(Login);