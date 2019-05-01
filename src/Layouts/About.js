import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CardClass from "./CardClass";
import andrew from "./Andrew.jpg";
import ashwin from "./Ashwin.jpg";
import vinnie from "./Vinnie.jpg";

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
          Meet the Rouxlette Team
        </Typography>
        <br />
        <Grid container spacing={40}>
          <Grid item md className={classes.card}>
            <CardClass
              name="Andrew Zaw"
              subheader="azaw502@gmail.com"
              image={andrew}
              subcontent="Andrew Zaw is currently studying Computer Science at New York University, and hails from Miami. When not messing around with the UI and React design of Rouxlette, he enjoys cooking up dishes (follow him on Instagram @chef_zaw !!) and attempting to get to Diamond on League of Legends."
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Ashwin"
              subheader="subheader"
              image={ashwin}
              subcontent="subcontent"
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Max"
              subheader="subheader"
              image=""
              subcontent="subcontent"
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Tika"
              subheader="subheader"
              image=""
              subcontent="subcontent"
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Vinnie"
              subheader="subheader"
              image={vinnie}
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
