import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = { 
        response: ''
     }

     componentDidMount(){
        //  this.props.setShowHeader(false)
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
        console.log(this.props)
        return ( 
            <div>
                {this.state.response}
                <button onClick={() => {this.props.setShowHeader(!this.props.showHeader)}}>Klik</button>
            </div>
         );
    }
}
 
export default Login;