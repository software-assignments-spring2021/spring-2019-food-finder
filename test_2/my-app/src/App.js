import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

class App extends Component {
  onSubmit = fields => {
    console.log("Location is: ", fields.location);
    console.log("Food Preference is: ", fields.foodPreference);
    console.log("Walking time is: ", fields.walkingTime);
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
      </div>
    );
  }
}

export default App;
