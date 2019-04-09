import React, { Fragment, Component } from "react";
import "./App.css";
import { Form } from "./HomepageForm/index";
import { Header, Footer } from "./Layouts";

class App extends Component {
  onSubmit = fields => {
    console.log("Location is: ", fields.location);
    console.log("Food Preference is: ", fields.foodPreference);
    console.log("Walking time is: ", fields.walkingTime);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="App">
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
