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

// CSS in JS
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: '45%',
    border: '1px solid var(--app-dark-color)',
    textAlign: 'center',
  },
  signupContainer: {
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
});

// class based React component for Signup.
class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    password: '',
    confirmPassword: '',
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
      firstName,
      lastName,
      email,
      username,
      streetAddress,
      city,
      state,
      zipCode,
      password,
      confirmPassword,
    } = this.state;

    // If the first name field is empty, show form validation error.
    if (firstName === '') {
      this.setState({ error: 'First name is required.' });
      return;
    }

    // If the last name field is empty, show form validation error.
    if (lastName === '') {
      this.setState({ error: 'Last name is required.' });
      return;
    }

    // If the email field is empty, show form validation error.
    if (email === '') {
      this.setState({ error: 'Email is required.' });
      return;
    }

    // If the username field is empty, show form validation error.
    if (username === '') {
      this.setState({ error: 'Username is required.' });
      return;
    }

    // If the street address field is empty, show form validation error.
    if (streetAddress === '') {
      this.setState({ error: 'Street address is required.' });
      return;
    }

    // If the city field is empty, show form validation error.
    if (city === '') {
      this.setState({ error: 'City is required.' });
      return;
    }

    // If the state field is empty, show form validation error.
    if (state === '') {
      this.setState({ error: 'State is required.' });
      return;
    }

    // If the zip code field is empty, show form validation error.
    if (zipCode === '') {
      this.setState({ error: 'Zip code is required.' });
      return;
    }

    // If the password field is empty, show form validation error.
    if (password === '') {
      this.setState({ error: 'Password is required.' });
      return;
    }

    // If the confirm password field is empty, show form validation error.
    if (confirmPassword === '') {
      this.setState({ error: 'Enter password again to confirm.' });
      return;
    }

    // if the password and confirm password fields don't match, show form validation error.
    if (password !== confirmPassword) {
      this.setState({ error: 'Password and Confirm password fields do not match.' });
      return;
    }

    // After form is submitted successfully, clear form.
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      password: '',
      confirmPassword: '',
    });
  }

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    const {
      firstName,
      lastName,
      email,
      username,
      streetAddress,
      city,
      state,
      zipCode,
      password,
      error,
      confirmPassword,
    } = this.state;
    return (
      <div className={classes.signupContainer}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h4">
            Signup
          </Typography>
          <div className={classes.formContainer}>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="firstName"
                className={classes.textField}
                label="First name"
                name="firstName"
                value={firstName}
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
                id="lastName"
                className={classes.textField}
                label="Last name"
                name="lastName"
                value={lastName}
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
                id="email"
                className={classes.textField}
                label="Email"
                name="email"
                value={email}
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
                id="streetAddress"
                className={classes.textField}
                label="Street address"
                name="streetAddress"
                value={streetAddress}
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
                id="city"
                className={classes.textField}
                label="City"
                name="city"
                value={city}
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
                id="state"
                className={classes.textField}
                label="State"
                name="state"
                value={state}
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
                id="zipCode"
                className={classes.textField}
                label="Zip code"
                name="zipCode"
                value={zipCode}
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
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="confirmPassword"
                className={classes.textField}
                label="Confirm password"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                fullWidth
                margin="normal"
                onChange={this.handleChange}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <Typography variant="body1" className={classes.formError}>{error}</Typography>
            <Button className={classes.submitSignupBtn} fullWidth variant="contained" color="primary" onClick={this.handleSubmit}>
              Signup
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

// Document/validate the props being passed to this component.
Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};


// export the component from this file.
export default withStyles(styles)(Signup);
