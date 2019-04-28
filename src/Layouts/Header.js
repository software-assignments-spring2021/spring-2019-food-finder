import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

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
  },
  list: {
    width: 250
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    left: false
  };

  toggleDrawer = open => () => {
    this.setState({
      ["left"]: open
    });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              color="inherit"
              className={classes.grow}
              component={Link}
              style={{ textDecoration: "none" }}
              to="/"
            >
              Rouxlette
            </Typography>
            <Button color="inherit" component={Link} to="/login">
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
