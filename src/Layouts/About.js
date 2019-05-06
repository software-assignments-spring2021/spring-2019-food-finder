import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 50,
  },
  text: {
    marginTop: "3em",
    marginRight: "30%",
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
        <Typography variant="body1" className={classes.text}>
          Rouxlette is the collective project of a team of five students at New York University hoping to help 
          others make deciding where to eat, quick and easy. Whether you're in a hurry, are unfamiliar with the local digs, 
          and/or are just plain indecisive, we've got you covered! Simply choose your desired preferences and Rouxlette
          will generate five destinations just for you. 

          <br></br> <br></br>
          
          With Rouxlette, finding a place to eat has never been easier!
        </Typography>
      </div>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
