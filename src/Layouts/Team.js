import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import CardClass from "./CardClass";
import andrew from "./Andrew.jpg";
import ashwin from "./Ashwin.jpg";
import vinnie from "./Vinnie.jpg";
import tika from "./Tika.jpg";
import max from "./max.jpg";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50,
    marginLeft: "3em",
    marginRight: "3em"
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
              name="Andrew"
              subheader="azaw502@gmail.com"
              image={andrew}
              subcontent="Andrew Zaw is currently studying Computer Science at New York University, and hails from Miami. When not messing around with the UI and React design of Rouxlette, he enjoys cooking up dishes (follow him on Instagram @chef_zaw !!) and attempting to get to Diamond on League of Legends."
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Ashwin"
              subheader="akt352@nyu.edu"
              image={ashwin}
              subcontent="Ashwin Tanuku is currently a senior studying Computer Science at New York University, and is double minoring in Game Design and Japanese. 
              When not trying to deal with the many, many listings of documents in Rouxlette's databases, he likes to frequent bookstores around the city and consume copious amounts of green tea."
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Max"
              subheader="mb6376@nyu.edu"
              image={max}
              subcontent="Max is currently a junior at New York University studying Computer Science and minoring in Web Development. He likes comic books, videogames, and going to small museums. Follow him @spliced_tea!"
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Tika"
              subheader="ak5352@nyu.edu"
              image={tika}
              subcontent="Tika is currently a senior at NYU, majoring in Computer Science and minoring in Web Development and Game Design. In her spare time, she likes to watch anime and play horror JRPGs."
            />
          </Grid>
          <Grid item md className={classes.card}>
            <CardClass
              name="Vinnie"
              subheader="vz377@nyu.edu"
              image={vinnie}
              subcontent="Vinnie is currently a junior studying Computer Science at NYU, and is double minoring in Web Development
              and Creative Writing. She's a New York native and enjoys reading/writing poetry, thrift shopping, and attending concerts in her free time."
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
