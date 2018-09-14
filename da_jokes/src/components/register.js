import React, { Component } from 'react';
import styled from 'styled-components';

class Register extends Component{
    render(){

        return (
            <div>
            <RegisterDiv>
                <h1>Register Div</h1>
            </RegisterDiv>
        </div>
    )
}
}

export default Register;

const RegisterDiv = styled.div`
    border: 1px solid green;
    background: grey;
    color: black;
`;
