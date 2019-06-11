<<<<<<< HEAD
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./App.css";
import Routes from "./Routes";

export default class App extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated});
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">GID</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {this.state.isAuthenticated
                ? <NavItem onClick={this.handleLogout}>Log Out</NavItem>
                : <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem>Sign Up</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem>Login</NavItem>
                    </LinkContainer>
                </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes childProps={childProps}/>
      </div>
    );
  }  
}
=======
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from "./components/todos-list.component"

class App extends Component {
  constructor(props){
      super(props);

      this.state = {
      }
  }

  render() {
    return(<h1></h1>)
  }
}

export default App;
>>>>>>> e95eab774897b1bdcc9266eb070408acba175af2
