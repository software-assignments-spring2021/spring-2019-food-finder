import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  root: {
    padding: 50,
    textAlign: "center"
  }
};

const About = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        About Rouxlette
      </Typography>
      <br />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis
        lacus massa. Praesent faucibus, velit sed egestas ultrices, ex diam
        tempor felis, non placerat risus erat luctus odio. Praesent ut commodo
        erat.
      </Typography>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
