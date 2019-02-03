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
    padding: 10,
  },
  formError: {
    marginTop: 20,
    color: 'var(--form-error-color)',
  },
});

class CompanyDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    const { nextStep } = this.props;
    nextStep();
  }

  render() {
    const { values, handleChange, classes } = this.props;
    const {
      companyName,
      companyAddress,
      companyCity,
      companyState,
      companyZip,
      companyPhone,
      companyFax,
      companyEmail,
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
              Step 1 of 7: Enter company information.
            </Typography>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyName"
                className={classes.textField}
                label="Company name"
                name="companyName"
                value={companyName}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyName')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyAddress"
                className={classes.textField}
                label="Company address"
                name="companyAddress"
                value={companyAddress}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyAddress')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyCity"
                className={classes.textField}
                label="Company city"
                name="companyCity"
                value={companyCity}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyCity')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyState"
                className={classes.textField}
                label="Company state"
                name="companyState"
                value={companyState}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyState')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyZip"
                className={classes.textField}
                label="Company zip code"
                name="companyZip"
                value={companyZip}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyZip')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyPhone"
                className={classes.textField}
                label="Company phone"
                name="companyPhone"
                value={companyPhone}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyPhone')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyFax"
                className={classes.textField}
                label="Company fax"
                name="companyFax"
                value={companyFax}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyFax')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
            <FormControl fullWidth className={classes.formControl}>
              <TextField
                id="companyEmail"
                className={classes.textField}
                label="Company email"
                name="companyEmail"
                value={companyEmail}
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('companyEmail')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </FormControl>
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
CompanyDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default withStyles(styles)(CompanyDetails);
