import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = { 
        response: ''
     }

     componentDidMount(){
        axios.get('api/users/login')
            .then((res) => {
                this.setState({
                    response: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
     }

    render() { 
        return ( 
            <div>
                {this.state.response}
            </div>
         );
    }
}
 
export default Login;