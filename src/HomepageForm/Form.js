import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Select,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Grid,
  FormHelperText
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  }
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      foodPreference: "",
      walkingTime: ""
    };
  }

  onSubmit = e => {
    this.getRestaurants();
    //axios.get("/test", { params: this.state }).then(res => {
    //const query = res.data;
    //this.setState({ query });
    // });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  isValidLocation = location => {
    if (location.length !== 5 && location.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  getRestaurants() {
    console.log(this.state);
    axios
      .get("http://localhost:5000/test", {
        params: {
          location: this.state.location,
          foodPreference: this.state.foodPreference,
          walkingTime: this.state.walkingTime
        }
      })
      // Once we get a response and store data, let's change the loading state
      .then(response => {
        console.log(response);
        //this.setState({
        // restaurants: response.data,
        // isLoading: false
        //});
      })
      // If we catch any errors connecting, let's update accordingly
      .catch(error => {
        console.log("ERROR" + error);
        //this.setState({ error, isLoading: false }));
      });
  }

  render() {
    const { classes } = this.props;
    const disabled = () => {
      if (this.state.foodPreference.length !== 0) {
        if (this.state.location.length === 5) {
          if (this.state.walkingTime.length !== 0) {
            return false;
          }
        }
      }
      return true;
    };
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={0}
      >
        <br />
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="walkingTime">Your Location Scope</InputLabel>
            <Select
              name="walkingTime"
              value={this.state.walkingTime}
              onChange={this.handleChange("walkingTime")}
            >
              <MenuItem value="No Preference">No Preference</MenuItem>
              <MenuItem value="Nearby">Nearby</MenuItem>
            </Select>
            <FormHelperText>How far are you willing to go?</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-name"
              label="Your Zipcode"
              value={this.state.location}
              onChange={this.handleChange("location")}
              error={this.isValidLocation(this.state.location)}
              helperText={
                this.state.location.length !== 5 &&
                this.state.location.length !== 0
                  ? "Not valid"
                  : "Enter a zipcode"
              }
              margin="normal"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="foodPreference">
              Your Food Preference
            </InputLabel>
            <Select
              name="foodPreference"
              margin="normal"
              value={this.state.foodPreference}
              onChange={this.handleChange("foodPreference")}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="No Preference">No Preference</MenuItem>
              <MenuItem value="Afghan">Afghan</MenuItem>
              <MenuItem value="African">African</MenuItem>
              <MenuItem value="American">American</MenuItem>
              <MenuItem value="Armenian">Armenian</MenuItem>
              <MenuItem value="Asian">Asian</MenuItem>
              <MenuItem value="Australian">Australian</MenuItem>
              <MenuItem value="Bagels/Pretzels">Bagels/Pretzels</MenuItem>
              <MenuItem value="Bakery">Bakery</MenuItem>
              <MenuItem value="Bangladeshi">Bangladeshi</MenuItem>
              <MenuItem value="Barbecue">Barbecue</MenuItem>
              <MenuItem value="Basque">Basque</MenuItem>
              <MenuItem value="Bottled Beverages">Bottled Beverages</MenuItem>
              <MenuItem value="Brazilian">Brazilian</MenuItem>
              <MenuItem value="Cafe/Coffee/Tea">Cafe/Coffee/Tea</MenuItem>
              <MenuItem value="Cajun">Cajun</MenuItem>
              <MenuItem value="Californian">Californian</MenuItem>
              <MenuItem value="Caribbean">Caribbean</MenuItem>
              <MenuItem value="Chicken">Chicken</MenuItem>
              <MenuItem value="Chilean">Chilean</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
              <MenuItem value="Chinese/Cuban">Chinese/Cuban</MenuItem>
              <MenuItem value="Chinese/Japanese">Chinese/Japanese</MenuItem>
              <MenuItem value="Continental">Continental</MenuItem>
              <MenuItem value="Creole">Creole</MenuItem>
              <MenuItem value="Creole/Cajun">Creole/Cajun</MenuItem>
              <MenuItem value="Czech">Czech</MenuItem>
              <MenuItem value="Delicatessen">Delicatessen</MenuItem>
              <MenuItem value="Donuts">Donuts</MenuItem>
              <MenuItem value="Eastern European">Eastern European</MenuItem>
              <MenuItem value="Egyptian">Egyptian</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Ethiopian">Ethiopian</MenuItem>
              <MenuItem value="Filipino">Filipino</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="Fruits/Vegetables">Fruits/Vegetables</MenuItem>
              <MenuItem value="German">German</MenuItem>
              <MenuItem value="Greek">Greek</MenuItem>
              <MenuItem value="Hamburgers">Hamburgers</MenuItem>
              <MenuItem value="Hawaiian">Hawaiian</MenuItem>
              <MenuItem value="Hotdogs">Hotdogs</MenuItem>
              <MenuItem value="Hotdogs/Pretzels">Hotdogs/Pretzels</MenuItem>
              <MenuItem value="Ice Cream/Gelato/Yogurt/Ices">
                Ice Cream/Gelato/Yogurt/Ices
              </MenuItem>
              <MenuItem value="Indian">Indian</MenuItem>
              <MenuItem value="Indonesian">Indonesian</MenuItem>
              <MenuItem value="Iranian">Iranian</MenuItem>
              <MenuItem value="Irish">Irish</MenuItem>
              <MenuItem value="Italian">Italian</MenuItem>
              <MenuItem value="Japanese">Japanese</MenuItem>
              <MenuItem value="Jewish/Kosher">Jewish/Kosher</MenuItem>
              <MenuItem value="Juice/Smoothies/Fruit Salads">
                Juice/Smoothies/Fruit Salads
              </MenuItem>
              <MenuItem value="Korean">Korean</MenuItem>
              <MenuItem value="Latin">Latin</MenuItem>
              <MenuItem value="Mediterranean">Mediterranean</MenuItem>
              <MenuItem value="Mexican">Mexican</MenuItem>
              <MenuItem value="Middle Eastern">Middle Eastern</MenuItem>
              <MenuItem value="Moroccan">Moroccan</MenuItem>
              <MenuItem value="Not Listed/Not Applicable">
                Not Listed/Not Applicable
              </MenuItem>
              <MenuItem value="Nuts/Confectionary">Nuts/Confectionary</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
              <MenuItem value="Pakistani">Pakistani</MenuItem>
              <MenuItem value="Pancakes/Waffles">Pancakes/Waffles</MenuItem>
              <MenuItem value="Peruvian">Peruvian</MenuItem>
              <MenuItem value="Pizza">Pizza</MenuItem>
              <MenuItem value="Pizza/Italian">Pizza/Italian</MenuItem>
              <MenuItem value="Polish">Polish</MenuItem>
              <MenuItem value="Polynesian">Polynesian</MenuItem>
              <MenuItem value="Portuguese">Portuguese</MenuItem>
              <MenuItem value="Russian">Russian</MenuItem>
              <MenuItem value="Salads">Salads</MenuItem>
              <MenuItem value="Sandwiches">Sandwiches</MenuItem>
              <MenuItem value="Sandwiches/Salads/Mixed Buffet">
                Sandwiches/Salads/Mixed Buffet
              </MenuItem>
              <MenuItem value="Scandinavian">Scandinavian</MenuItem>
              <MenuItem value="Seafood">Seafood</MenuItem>
              <MenuItem value="Soul Food">Soul Food</MenuItem>
              <MenuItem value="Soups">Soups</MenuItem>
              <MenuItem value="Soups & Sandwiches">Soups & Sandwiches</MenuItem>
              <MenuItem value="Southwestern">Southwestern</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="Steak">Steak</MenuItem>
              <MenuItem value="Tapas">Tapas</MenuItem>
              <MenuItem value="Tex-Mex">Tex-Mex</MenuItem>
              <MenuItem value="Thai">Thai</MenuItem>
              <MenuItem value="Turkish">Turkish</MenuItem>
              <MenuItem value="Vegetarian">Vegetarian</MenuItem>
              <MenuItem value="Vietnamese/Cambodian/Malaysia">
                Vietnamese/Cambodian/Malaysia
              </MenuItem>
            </Select>
            <FormHelperText>
              What type of food are you looking for?
            </FormHelperText>
          </FormControl>
        </Grid>
        <br />
        <Grid item xs={12}>
          <Button
            onClick={() => this.onSubmit()}
            color="secondary"
            margin="small"
            size="large"
            variant="raised"
            disabled={disabled()}
            component={Link}
            to="/results"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }

  // //The rough idea of getting the state from Form.js
  // // to search in the DB
  // app.get("/test", function(req, res){
  //     res.sendFile("./backend/state.html");
  // });
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
