import React, { Component } from 'react';
// import PropTypes for documenting/validating types for component's properties.
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
});

class DateTimeDetails extends Component {
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
    const { values, handleChange, classes } = this.props;
    const {
      applicationDate,
      applicationStartTime,
      applicationFinishedTime,
    } = values;
    return (
      <div className={classes.reportContainer}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5">
            Pesticide Application Record
          </Typography>
          <Typography variant="subtitle">
            Field Crop Pest Management
          </Typography>
          <div className={classes.formContainer}>
            <Typography variant="h6">
              Step 5 of 7: Enter the date and time of the application.
            </Typography>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="applicationDate"
                className={classes.textField}
                label="Date of application"
                name="applicationDate"
                type="date"
                value={applicationDate}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('applicationDate')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="applicationStartTime"
                className={classes.textField}
                label="Started"
                name="applicationStartTime"
                value={applicationStartTime}
                type="time"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('applicationStartTime')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="applicationFinishedTime"
                className={classes.textField}
                label="Finished"
                name="applicationFinishedTime"
                value={applicationFinishedTime}
                fullWidth
                margin="normal"
                type="time"
                variant="outlined"
                onChange={handleChange('applicationFinishedTime')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.back}>
              Back
            </Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.continue}>
              Continue
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

// Document/validate the props being passed to this component.
DateTimeDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default withStyles(styles)(DateTimeDetails);
