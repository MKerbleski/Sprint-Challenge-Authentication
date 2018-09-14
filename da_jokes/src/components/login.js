import React, { Component } from 'react';
import styled from 'styled-components';

class Login extends Component{
   render(){
       return (
           <div>
            <LoginDiv>
                <h1>Login Div</h1>
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
