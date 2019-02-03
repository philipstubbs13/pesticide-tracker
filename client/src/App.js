// Global import of React.
import React, { Component } from 'react';
// Import third-party routing library (react-router-dom);
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import the page containers
import MapView from './containers/MapView';
import Profile from './containers/Profile';
import ReportForm from './containers/ReportForm';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import ViewChemicals from './containers/ViewChemicals';
// import main app css file.
import './App.css';

// class based React component for the main App component.
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/report" component={ReportForm} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/map" component={MapView} />
            <Route exact path="/details" component={ViewChemicals} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// export the component from this file.
export default App;
