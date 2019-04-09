import React from "react";
import Button from "@material-ui/core/Button";

export default class Form extends React.Component {
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
    return (
      <form>
        <br />
        <input
          name="location"
          placeholder="Location"
          value={this.state.location}
          onChange={e => this.change(e)}
        />
        <br />
        <select
          name="foodPreference"
          value={this.state.foodPreference}
          onChange={e => this.change(e)}
        >
          <option value="No Preference">No Preference</option>
          <option value="American">American</option>
          <option value="Bakery">Bakery</option>
          <option value="Chinese">Chinese</option>
          <option value="Thai">Thai</option>
        </select>
        <br />
        <select
          name="walkingTime"
          value={this.state.walkingTime}
          onChange={e => this.change(e)}
        >
          <option value="<5">Under 5 Minutes</option>
          <option value="5-10">5-10 Minutes</option>
          <option value="10-15">10-15 Minutes</option>
          <option value="15-20">15-20 Minutes</option>
          <option value=">20">Over 20 Minutes</option>
        </select>
        <br />
        <button onClick={() => this.onSubmit()}>Submit</button>
      </form>
    );
  }
}
