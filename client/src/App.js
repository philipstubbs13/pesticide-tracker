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
import firebase from 'firebase';
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
// import Firebase configuration.
import { auth, provider } from './firebase-config';
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
  constructor(props) {
    super(props);
    this.usersRef = null;
    this.userRef = null;
    this.state = {
      user: null,
      photoURL: '',
      displayName: '',
      email: '',
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    // When the user signs in, this checks the Firebase database to see
    // if they were already previously authenticated.
    // If they were, we set their user details back into the state.
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email,
        });
      }
      console.log(this.state.user);
    });
  }

  // Handles authentication with firebase.
  // Here we call the signInWithPopup method from the auth module,
  // and pass in our provider (remember this refers to the Google Auth Provider).
  // Now, when you click the 'login' button, it will trigger a popup
  // that gives us the option to sign in with a Google account
  // signInWithPopup has a promise API that allows us to call
  // .then on it and pass in a callback.
  // This callback will be provided with a result object that contains,
  // among other things, a property called .user that has all the
  // information about the user who has just successfully signed in
  // including their name and user photo. We then store this inside of the state using setState.
  login(){
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        const user = result.user;
        this.setState({
          user,
        });
      });
  }

  // We call the signOut method on auth,
  // and then using the Promise API
  // we remove the user from our application's state.
  // With this.state.user now equal to null,
  // the user will see the Log In button instead of the Log Out button.
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null,
        });
        console.log(this.state.user);
      });
  }

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const { user, photoURL, displayName, email } = this.state;
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <MuiThemeProvider theme={theme}>
              <NavBar handleLogout={this.logout} user={user} photoURL={photoURL} displayName={displayName} email={email} />
              <div className={classes.appPages}>
                {user ? (
                  <Switch>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/report" component={ReportForm} />
                    <Route
                      exact
                      path="/profile"
                      render={props => (
                        <Profile
                          {...props}
                          handleLogin={this.login}
                          photoURL={photoURL}
                          displayName={displayName}
                        />
                      )}
                    />
                    <Route exact path="/" component={MapView} />
                    <Route exact path="/viewchemicals" component={ViewChemicals} />
                    <Route component={MapView} />
                  </Switch>
                ) : (
                  <Switch>
                    <Route
                      render={props => (
                        <Signin
                          {...props}
                          handleLogin={this.login}
                        />
                      )}
                    />
                  </Switch>
                )}
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
