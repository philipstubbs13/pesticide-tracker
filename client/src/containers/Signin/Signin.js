// Global import of React.
import React, { Component } from 'react';
// import PropTypes for documenting/validating types for component's properties.
import PropTypes from 'prop-types';
// import material ui components and styling.
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Signin.css';

// CSS in JS
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '45%',
    border: '1px solid var(--app-dark-color)',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '75%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
  },
  signinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 30,
  },
  submitSignupBtn: {
    marginTop: 15,
    padding: 10,
  },
  formError: {
    marginTop: 20,
    color: 'var(--form-error-color)',
  },
  subtitle: {
    marginTop: 20,
  },
});

// class based React component for Signup.
class Signin extends Component {
  state = {
    username: '',
    password: '',
    error: '',
  }

  // Method for keeping track of the input that user enters in the form fields.
  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  // When the user submits the signup form...
  handleSubmit = () => {
    // ES6 destructuring
    const {
      username,
      password,
    } = this.state;

    // If the username field is empty, show form validation error.
    if (username === '') {
      this.setState({ error: 'Username is required.' });
      return;
    }

    // If the password field is empty, show form validation error.
    if (password === '') {
      this.setState({ error: 'Password is required.' });
      return;
    }

    // After form is submitted successfully, clear form.
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    // ES6 destructuring
    const { classes, handleLogin } = this.props;
    const {
      username,
      password,
      error,
    } = this.state;
    return (
      <div className={classes.signinContainer}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h4">
            Sign In
          </Typography>
          <div className={classes.subtitle}>
            <Typography variant="subtitle">
              Welcome to Pesticide Tracker.
            </Typography>
            <Typography variant="subtitle">
              Please login with Google to continue.
            </Typography>
          </div>
          <div className={classes.formContainer}>
            {/* <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="username"
                className={classes.textField}
                label="Username"
                name="username"
                value={username}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="password"
                className={classes.textField}
                label="Password"
                name="password"
                type="password"
                value={password}
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl> */}
            {/* <Typography variant="body1" className={classes.formError}>{error}</Typography> */}
            {/* <Button className={classes.submitSignupBtn} fullWidth variant="contained" color="primary" onClick={this.handleSubmit}>
              Sign in
            </Button> */}
            {/* <h3><span>Or</span></h3> */}
            <button type="submit" className="loginBtn loginBtn--google" onClick={() => handleLogin()}>
              Login with Google
            </button>
          </div>
        </Paper>
      </div>
    );
  }
}

// Document/validate the props being passed to this component.
Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};


// export the component from this file.
export default withStyles(styles)(Signin);
