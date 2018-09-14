import React, { Component, Routes} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


import Register from './components/register';
import Login from './components/login';
import Jokes from './components/jokes';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  
  componentDidMount(){
    console.log("CDM");
  }

  logout = event => {
    console.log('logout')
  }

  render() {
    return (
      <div>
        <AppDiv>
          <h1>App Div</h1>
          <div className="links">
            <Link to="/register" onClick={this.logout}>Logout</Link>
            <Link to="/register" >Register</Link>
            <Link to="/login" >Login</Link>
            <Link to="/jokes" >Jokes</Link>
          </div>
          <Routes path="/register" component={Register} />
          <Routes path="/login" component={Login} />
          <Routes path="/jokes" component={Jokes} />
        </AppDiv>
      </div>
    );
  }
}

export default App;

const AppDiv = styled.div`
  background: black;
  color: white;
  height: 100vh;
  width: 100vw;
`;