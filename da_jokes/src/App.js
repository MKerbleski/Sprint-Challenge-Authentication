import React, { Component} from 'react';
import { Link, withRouter, Route } from 'react-router-dom'
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
    localStorage.removeItem('jwtoken')
  }

  render(){
    return (
      <div>
        <AppDiv>
          <h1>App Div</h1>
          <Route path="/" render={() => {
            return (
                <div className="links">
                  <Link to="/register" className="link" onClick={this.logout}>Logout</Link>
                  <Link to="/register" className="link">Register</Link>
                  <Link to="/login" className="link">Login</Link>
                  <Link to="/jokes" className="link">Jokes</Link>
                </div>
            )
          }} />
           

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/jokes" component={Jokes} />
        </AppDiv>
      </div>
    );
  }
}

export default withRouter(App);

const AppDiv = styled.div`
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .links{
    ${'' /* border: 1px solid black; */}
    margin: 10px;
    height: 50px;
    width: 50%;
    display: flex;
    justify-content:space-between;
    .link{
      color: white;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      ${'' /* padding: 20px; */}
      height: 100%;
      width: 25%;
      background: grey;
      border: 1px solid black;
      &:hover{
        color: lightgray;
      }
    }
  }
`;