import React, { Fragment, Component } from "react";
import { Form } from "./HomepageForm/index";
import { Header } from "./Layouts";
import { Router } from "react-router";
import Login from "./Layouts/NewLogin";
import { createBrowserHistory } from "history";

import LR from "./Layouts/Login";
import Loginbox from "./"
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Results from "./Layouts/Results";
//import Head from "./Layouts/Header";
import Main from "./"
import Team from "./Layouts/Team";
import About from "./Layouts/About";
import "typeface-roboto";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#222831"
    },
    secondary: {
      main: "#393e46"
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }
  myCallback = dataFromChild => {
    this.state.restaurants = dataFromChild;
    console.log(this.state.restaurants);
    history.push("/results");
  
  };

  myCallbackLogin = dataFromChildLogin => {
    this.state.user = dataFromChildLogin;
    console.log(this.state.user);
    //setTimeout(function(){}, 3000);
    //history.push("/");
    //console.log(this.state.user);
   // console.log(this.state.user.username);
    console.log(this.state.user.loggedIn);
  };

  render() {
    //console.log(user.loggedIn);
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <Fragment>
            <Header user={this.state.user} />
            <Route
              exact
              path="/"
              render={props => <Form callbackFromParent={this.myCallback} />}
            />
           
            <Route 
              path="/login" 
              render={props => (<LR callbackFromParent={this.myCallbackLogin}/>)}
            /> 
           
            <Route
              path="/results"
              render = {props => (
                <Results parentRestaurants={this.state.restaurants} />
              )}
            />
            <Route path="/team" component={Team} />
            <Route path="/about" component={About} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
