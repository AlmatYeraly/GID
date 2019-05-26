import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from "./components/todos-list.component"

class App extends Component {
  constructor(props){
      super(props);

      this.onChangeTodoDescriprtion = this.onChangeTodoDescriprtion.bind(this);
      this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
      this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          todo_description: '',
          todo_responsible: '',
          todo_priority: '', 
          todo_completed: false,
          redirect: false
      }
  }

  onChangeTodoDescriprtion(e) {
      this.setState({
          todo_description: e.target.value
      });
  }

  onChangeTodoResponsible(e) {
      this.setState({
          todo_responsible: e.target.value
      });
  }

  onChangeTodoPriority(e) {
      this.setState({
          todo_priority: e.target.value
      });
  }

  onSubmit(e) {
      e.preventDefault();

      console.log(`Form submitted:`);
      console.log(`Redirect: ${this.state.redirect}`);

      this.setState({
       redirect: true
    });
  }

  render() {
      if (this.state.redirect) {
        //return (<h1>Test</h1>)
        return (
          <BrowserRouter>
            <Route path="/list" exact component={TodosList} />
          </BrowserRouter>
        )
      }
      return (
          <div style={{marginTop: "5%"}}>
              <div className="container">
                <h3>GID</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email"
                                className="form-control"
                                style={{maxWidth: 400}}
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescriprtion}
                                />
                    </div>

                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password"
                                className="form-control"
                                style={{maxWidth: 400}}
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>

                    <div className="form-group">
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
              </div>
          </div>
      )
  }
}

export default App;
