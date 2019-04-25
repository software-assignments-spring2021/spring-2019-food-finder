import React, { Fragment, Component } from "react";
import { Form } from "./HomepageForm/index";
import { Header, Footer } from "./Layouts";
import LR from "./Layouts/Login";
import LoginTest from "./Layouts/LoginTest";
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider, Button } from "@material-ui/core";
import "typeface-roboto";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <Route path="/" component={Form} exact />
          <Route path="/login" component={LR} />
          <Route path="/about" component={LoginTest} />
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
