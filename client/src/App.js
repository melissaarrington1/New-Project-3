import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path='/user' component={UserPage} />
        <Route exact path='/user/:userId' component={UserWeatherPage} />
        <Route path='/user/:userId' component={UpdateUser} />
        <Route path='/' component={HomePage} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
