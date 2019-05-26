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
