import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import axios from "axios";
import Form from "../HomepageForm/Form.js";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const styles = theme => ({
  "@keyframes fadein": {
    from: {
      opacity: 0,
      transform: "translateY(-15px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  paper: {
    padding: 25,
    textAlign: "center",
    color: theme.palette.text.secondary,
    animation: "1s ease-out 0s 1 fadein"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  grid: {
    paddingTop: "1em"
  }
});

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isEmpty = this.props.parentRestaurants.length === 0 ? true : false;
    const { classes } = this.props;
    console.log(this.props.parentRestaurants);
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={40}
        className={classes.grid}
        style={{ minHeight: "70vh" }}
      >
        {isEmpty ? (
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={2}>
              <Typography variant="h4">Sorry!</Typography>
              <br />
              <Typography variant="body1">
                No restaurants found matching your criteria.
              </Typography>
            </Paper>
          </Grid>
        ) : (
          this.props.parentRestaurants.map(restaurant => {
            return (
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={2}>
                  <Typography variant="h4">{restaurant.name}</Typography>
                  <br />
                  <Typography variant="body1">
                    An {restaurant.cuisine_type} restaurant, located at{" "}
                    {restaurant.building_number} {restaurant.address} {", "}{" "}
                    {restaurant.zipcode} in {restaurant.borough}
                  </Typography>
                </Paper>
              </Grid>
            );
          })
        )}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" component={Link} to="/">
            <ArrowBackIcon className={classes.leftIcon} />
            Back to Search
          </Button>
        </Grid>
      </Grid>
    );
  }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
