import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    register = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3300/api/register', this.state).then(res => {
            localStorage.setItem('jwtoken', res.data.token)
            this.props.history.push('/jokes');
        })
        this.setState({
            username: '',
            password: '',
        })
        
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return (
            <React.Fragment>
                <RegisterDiv>
                    <h1>Register</h1>
                    <form onSubmit={this.register}>
                        <input type="text" value={this.state.username} name="username" placeholder='username' onChange={this.inputHandler}>{this.value}</input>
                        <input type="password" value={this.state.pasword} name="password" placeholder='password' onChange={this.inputHandler}>{this.value}</input>
                        <button>Register</button>
                    </form>
                </RegisterDiv>
            </React.Fragment>
        )
    }
}

export default Register;

const RegisterDiv = styled.div`
    border: 1px solid green;
    background: grey;
    color: black;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
