import React, { Component } from 'react';
// import PropTypes for documenting/validating types for component's properties.
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

class Confirm extends Component {
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
    const { values, classes } = this.props;
    const {
      companyName,
      companyAddress,
      companyCity,
      companyState,
      companyZip,
      companyPhone,
      companyFax,
      companyEmail,
      applicatorName1,
      applicatorName2,
      applicatorLicense1,
      applicatorLicense2,
      customerName,
      customerAddress,
      customerCity,
      customerState,
      customerZip,
      customerPhone,
      applicationTypeAerial,
      applicationTypeGround,
      applicationDate,
      applicationStartTime,
      applicationFinishedTime,
      unitsTreated,
      temperature,
      windSpeed,
      windDirection,
      locationDescription,
      brandName,
      epaRegNumber,
      rateUsed,
    } = values;
    return (
      <div className={classes.reportContainer}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5">
            Confirm your information
          </Typography>
          <div className={classes.formContainer}>
            <List>
              <ListItem>
                <ListItemText primary="Company name" secondary={companyName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company address" secondary={companyAddress} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company state" secondary={companyState} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company zip" secondary={companyZip} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company phone" secondary={companyPhone} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company fax" secondary={companyFax} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Company email" secondary={companyEmail} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicator name" secondary={applicatorName1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicator license" secondary={applicatorLicense1} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicator name" secondary={applicatorName2} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Applicator license" secondary={applicatorLicense2} />
              </ListItem>
            </List>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.back}>
              Back
            </Button>
            <Button className={classes.button} variant="contained" color="primary" onClick={this.continue}>
              Submit
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

// Document/validate the props being passed to this component.
Confirm.propTypes = {
  classes: PropTypes.object.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default withStyles(styles)(Confirm);
