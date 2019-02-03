// Global import of React.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
// import the NavBar component
import NavBar from './components/NavBar';
// import main app css file.
import './App.css';

const styles = {
  appPages: {
    marginLeft: 30,
    marginRight: 30,
  },
};

// class based React component for the main App component.
class App extends Component {
  render() {
    // ES6 destructuring
    const { classes } = this.props;
    return (
      <div className="App">
        <NavBar />
        <div className={classes.appPages}>
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
      </div>
    );
  }
}

// Props validation
App.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export the component from this file.
export default withStyles(styles)(App);
