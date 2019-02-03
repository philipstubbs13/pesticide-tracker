// Global import of React.
import React, { Component } from 'react';
// import PropTypes for documenting/validating types for component's properties.
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Import google map react component
import GoogleMapReact from 'google-map-react';
// import material ui components and styling.
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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
  createRecord: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mapViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },

    
  },
  searchRecordsContainer: {
    marginTop: 30,
  },
  fieldsList: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      width: '75%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  fieldMap: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginTop: 30,
    border: '1px solid var(--app-dark-color)',
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
  },
  fieldsTitle: {
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  loadMore: {
    marginTop: 20,
  },
});

const AnyReactComponent = () => <div><i className="fas fa-map-marker-alt fa-3x" /></div>;
const AnyReactComponent1 = () => <div><i className="fas fa-map-marker-alt fa-3x" /></div>;

// class based React component for Signup.
class MapView extends Component {
  static defaultProps = {
    center: {
      lat: 44.9778,
      lng: -93.2650,
    },
    zoom: 11,
  };

  render() {
    // ES6 destructuring
    const { classes } = this.props;
    return (
      <div className={classes.searchRecordsContainer}>
        <div className={classes.createRecord}>
          <Button variant="contained" component={Link} to="/report" color="primary">
            Create Pesticide Application Record
          </Button>
        </div>
        <Typography variant="h4" className={classes.fieldsTitle}>Search pesticide application records</Typography>
        <div className={classes.mapViewContainer}>
          <div className={classes.fieldsList}>
            <Paper style={{ backgroundColor: '#efebe9' }} className={classes.field} elevation={1}>
              <Typography variant="h6">Black Hallow Farm</Typography>
              <Typography variant="subtitle1">Type of crop affected: corn</Typography>
              <Typography variant="subtitle1">Chemical product that field was treated with: 42-S Thiram Fungicide</Typography>
              <Button variant="outlined" component={Link} to="/viewchemicals" color="primary"> View Details 
              </Button>
            </Paper>
            <Paper style={{ backgroundColor: '#efebe9' }} className={classes.field} elevation={1}>
              <Typography variant="h6">Robinwood Farm</Typography>
              <Typography variant="subtitle1">Type of crop affected: soybeans</Typography>
              <Typography variant="subtitle1">Product that field was treated with: 2, 4-D Amine Weed Killer</Typography>
              <Button variant="outlined" color="primary" component={Link} to="/viewchemicals" color="primary">View Details</Button>
            </Paper>
            <Paper style={{ backgroundColor: '#efebe9' }} className={classes.field} elevation={1}>
              <Typography variant="h6">Nightfall farm</Typography>
              <Typography variant="subtitle1">Type of crop affected: potatoes</Typography>
              <Typography variant="subtitle1">Product that field was treated with: 2, 4-D Ester 4</Typography>
              <Button variant="outlined" color="primary" component={Link} to="/viewchemicals" color="primary">View Details</Button>
            </Paper>
            <Paper style={{ backgroundColor: '#efebe9' }} className={classes.field} elevation={1}>
              <Typography variant="h6">Eastwood farm</Typography>
              <Typography variant="subtitle1">Type of crop affected: apples</Typography>
              <Typography variant="subtitle1">Product that field was treated with: Accent Gold Herbicide</Typography>
              <Button variant="outlined" color="primary" component={Link} to="/viewchemicals" color="primary">View Details</Button>
            </Paper>
            <Button variant="outlined" color="primary" className={classes.loadMore} color="primary">
              Load More
            </Button>
          </div>
          {/* Important! Always set the container height explicitly */}
          <div className={classes.fieldMap} style={{ marginTop: -150, height: '100vh', width: '90%', marginLeft: 30 }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBlNQbJHExNycQQQRotKkzcGD31jK6DduI' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={44.9778}
                lng={-93.2650}
              />
              <AnyReactComponent1
                lat={44.7394}
                lng={-93.1258}
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    );
  }
}

// Document/validate the props being passed to this component.
MapView.propTypes = {
  classes: PropTypes.object.isRequired,
};


// export the component from this file.
export default withStyles(styles)(MapView);
