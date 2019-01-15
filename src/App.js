import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import NavBar from './Components/NavBar';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <div className="light-blue lighten-1">
              <NavBar className='section'/>
          </div>
          <div className="cyan lighten-5">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App ;
