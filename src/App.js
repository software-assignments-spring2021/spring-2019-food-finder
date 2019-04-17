import React, { Fragment, Component } from "react";
import "./App.css";
import { Form } from "./HomepageForm/index";
import { Header, Footer } from "./Layouts";
import LR from './Layouts/Login';
import axios from "axios";

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
    console.log("Walking time is: ", fields.walkingTime);
    console.log("Food Preference is: ", fields.foodPreference);

    // IMPLEMENT SEND REQUEST
    // fetch("http://localhost:3000")
    //   .then((success) => {
    //     console.log(Form.state);
    //     return Form.state;
    //   }).catch((err) => {
    //     console.log("Error wasn't handled.");
    //   });

    axios.get('/test', {
      params: {
        // zipcode: fields.location,
        // cuisine_type: fields.foodPreference
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
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
