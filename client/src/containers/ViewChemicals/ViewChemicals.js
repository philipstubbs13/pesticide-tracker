import React, { Component } from 'react';
import SimplePieChart from "../PieChart";
import Paper from '@material-ui/core/Paper';

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

  chemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },

});

// class based React component for Signup.
class ViewChemicals extends Component {

  render() {
    const { classes } = this.props;
    const data = [{name: 'Group A', value: 500}, {name: 'Group B', value: 300},
    {name: 'Group C', value: 200}, {name: 'Group D', value:  400}]
    

    return (
       <SimplePieChart data = {data}> </SimplePieChart>
    )
      {/* // <div className={classes.signinContainer}>
        /* <Paper className={classes.root} elevation={1}>
          <Typography variant="h4">
            Signin
          </Typography>
          <div className={classes.formContainer}>
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
            <Typography variant="body1" className={classes.formError}>{error}</Typography> */}
          // </div>
      //   </Paper>
      // </div>
    // ); */}
  }
}

// export the component from this file.
export default ViewChemicals;
