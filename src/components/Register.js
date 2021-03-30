import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    state = { 
        response: ''
     }

     componentDidMount(){
        axios.get('api/users/register')
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
 
export default Register;