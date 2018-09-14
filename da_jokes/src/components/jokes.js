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
            alert('you must be logged in to view jokes page')
        }
    }

    render(){
        return (
            <React.Fragment>
                <JokesDiv>
                    <h1>Jokes!</h1>
                    <div className="jokes">
                        <div className="buttons">
                        {/* style={this.state.button === this.value ? {background: "gray"} : {background: "red"}} */}
                            <div>KnockKnock</div>
                            <div>General</div>
                            <div>Programming</div>
                        </div>
                        {this.state.jokes &&
                            this.state.jokes.map(joke => {
                                return (
                                    <div 
                                        className="joke" 
                                        onMouseOver={() => {this.setState({
                                            currentJoke: joke.id})}} 
                                        onMouseLeave={() => {this.setState({
                                            currentJoke: null})}} 
                                        key={joke.id}>
                                        <div style={this.state.currentJoke === joke.id ? {display: 'flex'} : {display: 'none'}}>{joke.punchline}</div>
                                        <div style={this.state.currentJoke === joke.id ? {display: 'none'} : {display: 'flex'}}>{joke.setup}</div>
                                    </div>)
                        })}
                    </div>
                </JokesDiv>
            </React.Fragment>
        )
    }
}

export default Jokes;

const JokesDiv = styled.div`
    border: 1px solid black;
    background: grey;
    color: black;
    width: 50%;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap; 
    .buttons{
        width: 80%;
        height: 40px;
        display: flex;
        justify-content: center;
        div{
            width: 33.33%;
            background: gray;
            border: 1px solid black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover{
                color: black;
                background: lightgray;
            }
        }
    }
    .jokes {
        display: flex;
        flex-direction: column;
        align-items: center;
        .joke{
            width: 70%;
            height: 100px;
            background: white;
            color: black;
            border: 1px solid black;
            margin: 10px;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;
