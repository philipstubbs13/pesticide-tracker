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

class AdditionalDetails extends Component {
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
      unitsTreated,
      temperature,
      windSpeed,
      windDirection,
      locationDescription,
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
              Step 6 of 7: Enter additional information about the application.
            </Typography>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="unitsTreated"
                className={classes.textField}
                label="Units treated"
                name="unitsTreated"
                value={unitsTreated}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('unitsTreated')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="temperature"
                className={classes.textField}
                label="Temperature"
                name="temperature"
                value={temperature}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('temperature')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="windSpeed"
                className={classes.textField}
                label="Wind speed"
                name="windSpeed"
                value={windSpeed}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('windSpeed')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="windDirection"
                className={classes.textField}
                label="Customer state"
                name="windDirection"
                value={windDirection}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('windDirection')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="locationDescription"
                className={classes.textField}
                label="Describe location of application site"
                name="locationDescription"
                value={locationDescription}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('locationDescription')}
                multiline
                rowsMax="4"
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
AdditionalDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default withStyles(styles)(AdditionalDetails);
