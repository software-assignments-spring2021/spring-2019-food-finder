import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LR from "./Login";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.openLogin = this.openLogin.bind(this);
    this.state = {
      LR: null
    };
  }

  openLogin = () => {
    if (this.state.LR === null) {
      this.setState({ LR: <LR /> });
    } else {
      this.setState({ LR: null });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              Rouxlette
            </Typography>
            <Button color="inherit" id="loginButton" onClick={this.openLogin}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
