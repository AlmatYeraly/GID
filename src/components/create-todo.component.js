import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props){
        super(props);
  
        this.state = {
            redirect: false,
            email: '',
            password: ''
        }
    }
  
    onChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      })
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
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                  />
                      </div>
  
                      <div className="form-group">
                          <label>Password: </label>
                          <input type="password"
                                  className="form-control"
                                  style={{maxWidth: 400}}
                                  value={this.state.password}
                                  onChange={this.handleChange}
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
