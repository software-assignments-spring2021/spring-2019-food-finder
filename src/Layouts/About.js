import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CardClass from "./CardClass";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50
  },
  card: {
    marginBottom: 50
  }
});

class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2" gutterBottom>
          About Rouxlette
        </Typography>
        <br />
        <Grid container spacing={12}>
          <Grid item md={4} className={classes.card}>
            <CardClass
              name="Andrew"
              subheader="subheader"
              content="image"
              subcontent="subcontent"
            />
          </Grid>
          <Grid item md={4} className={classes.card}>
            <CardClass
              name="Ashwin"
              subheader="subheader"
              content="image"
              subcontent="subcontent"
            />
          </Grid>
          <Grid item md={4} className={classes.card}>
            <CardClass
              name="Max"
              subheader="subheader"
              content="image"
              subcontent="subcontent"
            />
          </Grid>
          <Grid item md={4} className={classes.card}>
            <CardClass
              name="Tika"
              subheader="subheader"
              content="image"
              subcontent="subcontent"
            />
          </Grid>
          <Grid item md={4} className={classes.card}>
            <CardClass
              name="Vinnie"
              subheader="subheader"
              content="image"
              subcontent="subcontent"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
