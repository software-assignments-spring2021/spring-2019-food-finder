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
  ListItemText,
  Tooltip
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import SvgIcon from "@material-ui/core/SvgIcon";
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
  },
  rightButton: {
    marginLeft: 10,
    marginRight: 10
  }
};

function GithubIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </SvgIcon>
  );
}

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
          <ListItem button component={Link} to="/team">
            <ListItemText primary="The Rouxlette Team" />
            <ListItemIcon>
              <FaceIcon />
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
            <Tooltip title="Menu">
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={this.toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
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
            <Tooltip title="Github Repository" placement="bottom">
              <IconButton
                className={classes.rightButton}
                color="inherit"
                aria-label="Github Repository"
                onClick={() =>
                  window.open(
                    "https://github.com/nyu-software-engineering/food-finder",
                    "_blank"
                  )
                }
              >
                <GithubIcon />
              </IconButton>
            </Tooltip>
            <Button
              color="inherit"
              component={Link}
              to="/login"
              className={classes.rightButton}
            >
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
