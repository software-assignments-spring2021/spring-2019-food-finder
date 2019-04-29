import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import {location} from './HomepageForm/Form.js';
import {walkingTime} from './HomepageForm/Form.js';
import {foodPreference} from './HomepageForm/Form.js';
const query = {
  zipcode: location,
  cuisine_type: foodPreference,
  borough: walkingTime  

};
class App extends React.Component {
state = {
  restaurants: [],
  isLoading: true,
  errors: null
};

getRestaurants() {
  if(query.zipcode == "" && (query.cuisine_type == "" || query.cuisine_type == "No Preference") && query.borough == "No Preference"){
    

  axios.get("http://localhost:3000/restaurantData", {
    params: {
    }
  })
    // Once we get a response and store data, let's change the loading state
    .then(response => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      });
    })
    // If we catch any errors connecting, let's update accordingly
    .catch(error => this.setState({ error, isLoading: false }));
}

else if(query.zipcode == "" && (query.cuisine_type == "" || query.cuisine_type == "No Preference") && (query.borough != "No Preference" && query.borough != "Nearby")){
  const newQuery ={
      borough: request.query.walkingTime,
  };
  axios.get("http://localhost:3000/restaurantData", {
    params: {
      borough: query.borough
    }
  })
    // Once we get a response and store data, let's change the loading state
    .then(response => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      });
    })
    // If we catch any errors connecting, let's update accordingly
    .catch(error => this.setState({ error, isLoading: false }));
}




else if(query.zipcode == "" && (query.cuisine_type != "" && query.cuisine_type != "No Preference") && query.borough == "No Preference"){
  const newQuery ={
      cuisine_type: request.query.foodPreference,
  };
  axios.get("http://localhost:3000/restaurantData", {
    params: {
      cuisine_type: query.cuisine_type
    }
  })
    // Once we get a response and store data, let's change the loading state
    .then(response => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      });
    })
    // If we catch any errors connecting, let's update accordingly
    .catch(error => this.setState({ error, isLoading: false }));

}

else if(query.zipcode == "" && (query.cuisine_type != "" && query.cuisine_type != "No Preference") && query.borough != "No Preference"){
  const newQuery ={
      cuisine_type: request.query.foodPreference,
      borough: request.query.walkingTime,
  };
  axios.get("http://localhost:3000/restaurantData", {
    params: {
      cuisine_type: query.cuisine_type,
      borough:query.borough
    }
  })
    // Once we get a response and store data, let's change the loading state
    .then(response => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      });
    })
    // If we catch any errors connecting, let's update accordingly
    .catch(error => this.setState({ error, isLoading: false }));

}

else if(query.zipcode != "" && (query.cuisine_type == "" || query.cuisine_type == "No Preference") && query.borough == "Nearby"){
  const newQuery ={
      zipcode: request.query.location,
  };
  axios.get("http://localhost:3000/restaurantData", {
    params: {
      zipcode: query.zipcode
    }
  })
    // Once we get a response and store data, let's change the loading state
    .then(response => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      });
    })
    // If we catch any errors connecting, let's update accordingly
    .catch(error => this.setState({ error, isLoading: false }));

}
else if(query.zipcode != "" && (query.cuisine_type != "" && query.cuisine_type != "No Preference") && query.borough == "Nearby"){
  const newQuery ={
      cuisine_type: request.query.foodPreference,
      zipcode: request.query.location,
      //borough: request.query.walkingTime,
  };
  axios.get("http://localhost:3000/restaurantData", {
    params: {
      cuisine_type: query.cuisine_type,
      zipcode: query.zipcode
    }
  })
    // Once we get a response and store data, let's change the loading state
    .then(response => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      });
    })
    // If we catch any errors connecting, let's update accordingly
    .catch(error => this.setState({ error, isLoading: false }));

}
}
// Let's our app know we're ready to render the data
//componentDidMount() {
  //this.getRestaurants();
//}
// Putting that data to use
/*render() {
  const { isLoading, posts } = this.state;
  return (
    <React.Fragment>
      <h2>Random Post</h2>
      <div>
        {!isLoading ? (
          posts.map(post => {
            const { zipcode, cuisine_type, borough } = post;
            return (
              <div key={_id}>
                <h2>{}</h2>
                <p>{content}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </React.Fragment>
  );
        }*/
}

const styles = theme => ({
  paper: {
    padding: 25,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const Results = props => {
  const { classes } = props;
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
          <Typography variant="h4">Result 1</Typography>
          <br />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis
            lacus massa. Praesent faucibus, velit sed egestas ultrices, ex diam
            tempor felis, non placerat risus erat luctus odio. Praesent ut
            commodo erat.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">Result 2</Typography>
          <br />
          <Typography variant="body1">
            Etiam fermentum luctus augue nec mollis. Nam congue ante vitae
            facilisis efficitur. Nam tincidunt eu nisi at egestas. Vestibulum
            convallis dignissim dui non pretium
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={3}>
          <Typography variant="h4">Result 3</Typography>
          <br />
          <Typography variant="body1">
            Quisque sed felis ac libero facilisis porttitor ut sed leo. Sed et
            cursus ante. Nunc rutrum eros nibh, quis posuere odio malesuada ac.
            Cras a tortor at mauris ornare mollis. Mauris at est aliquam,
            dignissim neque sit amet, pretium quam.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
