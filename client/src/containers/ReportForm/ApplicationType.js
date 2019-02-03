import React, { Component } from 'react';
// import PropTypes for documenting/validating types for component's properties.
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class ApplicationType extends Component {
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
    const {
      values,
      handleTypeChange,
      classes,
    } = this.props;
    const {
      applicationTypeAerial,
      applicationTypeGround,
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
              Step 4 of 7: Enter application type
            </Typography>
            <div className={classes.checkboxContainer}>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={applicationTypeAerial}
                    onChange={handleTypeChange('applicationTypeAerial')}
                    value="applicationTypeAerial"
                    color="primary"
                  />
                )}
                label="Aerial"
              />
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={applicationTypeGround}
                    onChange={handleTypeChange('applicationTypeGround')}
                    value="applicationTypeGround"
                    color="primary"
                  />
                )}
                label="Ground"
              />
            </div>
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
ApplicationType.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleTypeChange: PropTypes.func.isRequired,

};

export default withStyles(styles)(ApplicationType);
