import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import PropTypes for documenting/validating types for component's properties.
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
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
    [theme.breakpoints.down('sm')]: {
      width: '75%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  reportContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  formContainer: {
    marginTop: 30,
  },
  button: {
    marginTop: 15,
    marginRight: 30,
    padding: 10,
  },
  formError: {
    marginTop: 20,
    color: 'var(--form-error-color)',
  },
  profileBtn: {
    marginTop: 30,
  },
});

class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.reportContainer}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5">
            Thank you for submitting this form.
          </Typography>
          <Typography variant="subtitle1">
            You can view all of your pesticide application records from your profile.
          </Typography>
          <Button className={classes.profileBtn} variant="outlined" color="primary" component={Link} to="/profile">
            Go to profile
          </Button>
        </Paper>
      </div>
    );
  }
}

// Document/validate the props being passed to this component.
Success.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withStyles(styles)(Success);
