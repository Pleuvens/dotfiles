import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../redux/Actions';

import './login.css'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const input = event.target.name;
        const value = event.target.value;
        this.setState({ [input]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ submitted: true });
        if (this.state.username && this.state.password) {
            this.props.dispatch(userActions.login(this.state.username, this.state.password));
        }
    }

    render () {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <div className="login">
                <form name="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <button>Login</button>
                    <div>
                    {
                        submitted && !username && <div>Username required</div>
                    }
                    {
                        submitted && !password && <div>Password required</div>
                    }
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const loggingIn = state.authentication.loggingIn;
    return {
        loggingIn
    };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };
