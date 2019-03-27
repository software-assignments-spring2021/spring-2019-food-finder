import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  Select,
  TextField,
  Button,
  MenuItem,
  FormHelperText,
  FormControl,
  MuiThemeProvider
} from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Form extends React.Component {
  state = {
    location: "",
    foodPreference: "",
    walkingTime: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    this.props.onSubmit(this.state);
  };

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider>
        <form className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="location">Location</InputLabel>
            <Select value={this.state.location} onChange={e => this.change(e)}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Location 1">Location 1</MenuItem>
              <MenuItem value="Location 2">Location 2</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="foodPreference">Food Preference</InputLabel>
            <Select
              name="foodPreference"
              margin="normal"
              value={this.state.foodPreference}
              onChange={e => this.change(e)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="No Preference">No Preference</MenuItem>
              <MenuItem value="American">American</MenuItem>
              <MenuItem value="Bakery">Bakery</MenuItem>
              <MenuItem value="Chinese">Chinese</MenuItem>
              <MenuItem value="Thai">Thai</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="walkingTime">Walking Time</InputLabel>
            <Select
              name="walkingTime"
              margin="normal"
              value={this.state.walkingTime}
              onChange={e => this.change(e)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="<5">Under 5 Minutes</MenuItem>
              <MenuItem value="5-10">5-10 Minutes</MenuItem>
              <MenuItem value="10-15">10-15 Minutes</MenuItem>
              <MenuItem value="15-20">15-20 Minutes</MenuItem>
              <MenuItem value=">20">Over 20 Minutes</MenuItem>
            </Select>
          </FormControl>
          <br />
          <Button
            onClick={() => this.onSubmit()}
            color="inherit"
            margin="normal"
          >
            Submit
          </Button>
        </form>
      </MuiThemeProvider>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
