import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    login = (e) => {
        e.preventDefault();
        console.log('login')
        axios.post('http://localhost:3300/api/login', this.state).then(res => {
            localStorage.setItem('jwtoken', res.data.token)
        })
        this.setState({
            username: '',
            password: '',
        })
        this.props.history.push('/jokes');

    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return (
            <div>
            <LoginDiv>
                <h1>Login Div</h1>
                <form onSubmit={this.login}>
                    <input type="text" value={this.state.username} name="username" placeholder='username' onChange={this.inputHandler}>{this.value}</input>
                    <input type="password" value={this.state.pasword} name="password" placeholder='password' onChange={this.inputHandler}>{this.value}</input>
                    <button>Register</button>
                </form>
            </LoginDiv>
        </div>
    )
}
}

export default Login;

const LoginDiv = styled.div`
    border: 1px solid green;
    background: grey;
    color: black;
`;
