import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'
import UserPage from './Components/UserPage'
import UserWeatherPage from './Components/UserWeatherPage'
import UpdateUser from './Components/UpdateUser'



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
