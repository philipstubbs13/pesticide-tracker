import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import css
import './Footer.css';

const styles = {
  cardContent: {
    color: 'var(--app-light-color)',
  },
};

class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="footer">
        <Card style={{ backgroundColor: '#2e2e2e' }} className={classes.card}>
          <CardContent>
            <Typography variant="h5" style={{ color: '#fff' }}>
              Pesticide Tracker
            </Typography>
            <Typography variant="subtitle1" style={{ color: '#fff' }}>
              Copyright &copy; 2019
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://github.com/philipstubbs13/pesticide-tracker" target="_blank" rel="noopener noreferrer">
              <Button size="small" style={{ color: '#fff' }}>Learn More</Button>
            </a>
          </CardActions>
        </Card>
      </div>
    );
  }
}

// Props validation
Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export the component from this file.
export default withStyles(styles)(Footer);
