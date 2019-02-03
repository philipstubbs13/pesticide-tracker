import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  profilePic: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
  },
  displayName: {
    color: '#fff',
    marginLeft: 10,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
});

class NavBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, handleLogout, user, photoURL, displayName, email} = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} onClick={this.handleMenu} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit" className={classes.grow} component={Link} to="/">
              Pesticide Tracker
            </Typography>
            {user && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  color="inherit"
                  component={Link}
                  to="/profile"
                >
                  {photoURL ? <img src={photoURL} alt="profile pic" className={classes.profilePic} /> : <AccountCircle />}
                  <Typography variant="subtitle1" className={classes.displayName}>
                    {displayName ? `Welcome, ${displayName}` : ''}
                  </Typography>
                </IconButton>
                <Button color="inherit" onClick={handleLogout} component={Link} to="/signin">Sign out</Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem component={Link} to="/profile" onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Sign out</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
