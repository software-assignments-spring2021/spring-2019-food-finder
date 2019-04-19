import React, { Fragment, Component } from "react";
import "./App.css";
import { Form } from "./HomepageForm/index";
import { Header, Footer } from "./Layouts";
import LR from './Layouts/Login';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.openLogin = this.openLogin.bind(this);
    this.state = {
      LR: null
    };
  }
  onSubmit = fields => {
    console.log("Location is: ", fields.location);
    console.log("Food Preference is: ", fields.foodPreference);
    console.log("Walking time is: ", fields.walkingTime);
  };

  openLogin = () => {
    
    if (this.state.LR === null){
      this.setState({LR: (<LR/>)});
    } else {
      this.setState({LR: null});
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <button id="loginButton" onClick={this.openLogin}>LOGIN</button>
        <div className="App">
          <Form onSubmit={fields => this.onSubmit(fields)} />
        </div>
        {this.state.LR}
        <Footer />
      </Fragment>
    );
  }
}

export default App;