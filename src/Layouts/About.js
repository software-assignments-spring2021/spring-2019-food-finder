import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  "@keyframes fade-in-right": {
    from: {
      opacity: 0,
      transform: "translateX(-15px)"
    },
    to: {
      opacity: 1,
      transform: "translateX(0)"
    }
  },
  "@keyframes fade-in-bottom": {
    from: {
      opacity: 0,
      transform: "translateY(15px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  title: {
    animation: "0.5s ease-out 0s 1 fade-in-right"
  },
  root: {
    flexGrow: 1,
    padding: 50,
    marginLeft: "3em",
    marginRight: "3em"
  },
  text: {
    marginTop: "3em",
    marginRight: "30%",
    fontWeight: 300,
    animation: "1s ease-out 0s 1 fade-in-bottom"
  },
  hoverText: {
    display: "inline",
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      color: "#777"
    }
  }
});

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom className={classes.title}>
          About Rouxlette
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Rouxlette is the collective project of a{" "}
          <Tooltip title="Meet the Team" placement="top" enterDelay={300}>
            <Typography
              variant="h6"
              component={Link}
              to="/team"
              className={classes.hoverText}
            >
              team of five students{" "}
            </Typography>
          </Tooltip>
          at New York University hoping to help others make deciding where to
          eat, quick and easy. Whether you're in a hurry, are unfamiliar with
          the local digs, and/or are just plain indecisive, we've got you
          covered! Simply choose your desired preferences and Rouxlette will
          generate five destinations just for you. With Rouxlette, finding a
          place to eat has never been easier!
        </Typography>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
