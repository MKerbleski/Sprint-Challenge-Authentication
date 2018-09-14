import React, { Component } from 'react';
import styled from 'styled-components';

class Jokes extends Component{
    render(){

        return (
            <div>
            <JokesDiv>
                <h1>Jokes Div</h1>
            </JokesDiv>
        </div>
    )
}
}

export default Jokes;

const JokesDiv = styled.div`
    border: 1px solid green;
    background: grey;
    color: black;
`;
