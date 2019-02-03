// Global import of React.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Import third-party routing library (react-router-dom);
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { createMuiTheme, withStyles, MuiThemeProvider } from '@material-ui/core/styles';
// import the page containers
import MapView from './containers/MapView';
import Profile from './containers/Profile';
import ReportForm from './containers/ReportForm';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import ViewChemicals from './containers/ViewChemicals';
// import the NavBar component
import NavBar from './components/NavBar';
// import the Footer component
import Footer from './components/Footer';
// import main app css file.
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e2e2e',
    },
    secondary: {
      main: '#efdcd5',
    },
  },
});

const styles = {
  appPages: {
    marginLeft: 30,
    marginRight: 30,
    minHeight: 'calc(100vh - 100px)',
    overflow: 'hidden',
  },
};

// class based React component for the main App component.
class App extends Component {
  render() {
    // ES6 destructuring
    const { classes } = this.props;
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <MuiThemeProvider theme={theme}>
              <NavBar />
              <div className={classes.appPages}>
                <Switch>
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/signin" component={Signin} />
                  <Route exact path="/report" component={ReportForm} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/" component={MapView} />
                  <Route exact path="/details" component={ViewChemicals} />
                  <Route component={MapView} />
                </Switch>
              </div>
              <Footer />
            </MuiThemeProvider>
          </React.Fragment>
        </Router>
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
