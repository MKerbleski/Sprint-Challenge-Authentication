import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

class Jokes extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidMount(props){
        if(localStorage.getItem('jwtoken')){
            const auth = {
                headers: {
                    Authorization: localStorage.getItem('jwtoken')
                }
            }
            axios.get('http://localhost:3300/api/jokes', auth).then(res => {
                this.setState({
                    jokes: res.data
                })
            }).catch(err => console.log(err))
        } else {
            this.props.history.push('/register');
        }
    }

    render(){
        return (
            <div>
            <JokesDiv>
                <h1>Jokes Div</h1>
                {this.state.jokes &&
                    this.state.jokes.map(joke => {
                        return (
                            <div className="joke" onMouseOver={() => {this.setState({
                                currentJoke: joke.id})}} key={joke.id}>
                                <div style={this.state.currentJoke === joke.id ? {display: 'flex'} : {display: 'none'}}>{joke.punchline}</div>

                                <div style={this.state.currentJoke === joke.id ? {display: 'none'} : {display: 'flex'}}>{joke.setup}</div>
                            </div>
                        )
                    })}
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
    display: flex; 
    justify-content: space-around
    flex-direction: row;
    flex-wrap: wrap; 
    .joke{
        width: 150px;
        height: 100px;
        background: white;
        color: black;
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
