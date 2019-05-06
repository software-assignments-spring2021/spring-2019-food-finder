import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import axios from "axios";
import Form from "../HomepageForm/Form.js";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";


const styles = theme => ({
  paper: {
    padding: 25,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  }
});

class Results extends React.Component {
  constructor(props) {
    super(props);
  }



render(){
  
  const { classes } = this.props;
  console.log(this.props.parentRestaurants);
  return (
    
      
  
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={40}
      style={{ minHeight: "70vh" }}
    >
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
        
          <Typography variant="h4">{this.props.parentRestaurants[0].name}</Typography>
          <br />
          <Typography variant="body1">
            An {this.props.parentRestaurants[0].cuisine_type} restuarant, located at {this.props.parentRestaurants[0].building_number} {" "} {this.props.parentRestaurants[0].address} {", "} {this.props.parentRestaurants[0].zipcode} in {this.props.parentRestaurants[0].borough}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">{this.props.parentRestaurants[1].name}</Typography>
          <br />
          <Typography variant="body1">
          An {this.props.parentRestaurants[1].cuisine_type} restuarant, located at {this.props.parentRestaurants[1].building_number} {" "} {this.props.parentRestaurants[1].address} {", "} {this.props.parentRestaurants[1].zipcode} in {this.props.parentRestaurants[1].borough}

          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">{this.props.parentRestaurants[2].name}</Typography>
          <br />
          <Typography variant="body1">
          An {this.props.parentRestaurants[2].cuisine_type} restuarant, located at {this.props.parentRestaurants[2].building_number} {" "} {this.props.parentRestaurants[2].address} {", "} {this.props.parentRestaurants[2].zipcode} in {this.props.parentRestaurants[2].borough}

          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
        
          <Typography variant="h4">{this.props.parentRestaurants[3].name}</Typography>
          <br />
          <Typography variant="body1">
          An {this.props.parentRestaurants[3].cuisine_type} restuarant, located at {this.props.parentRestaurants[3].building_number} {" "} {this.props.parentRestaurants[3].address} {", "} {this.props.parentRestaurants[3].zipcode} in {this.props.parentRestaurants[3].borough}

          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
        
          <Typography variant="h4">{this.props.parentRestaurants[4].name}</Typography>
          <br />
          <Typography variant="body1">
          An {this.props.parentRestaurants[4].cuisine_type} restuarant, located at {this.props.parentRestaurants[4].building_number} {" "} {this.props.parentRestaurants[4].address} {", "} {this.props.parentRestaurants[4].zipcode} in {this.props.parentRestaurants[4].borough}

          </Typography>
        </Paper>
      </Grid>
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
