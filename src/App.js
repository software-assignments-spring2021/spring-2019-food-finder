import React, { Fragment, Component } from "react";
import { Form } from "./HomepageForm/index";
import { Header } from "./Layouts";
import LR from "./Layouts/Login";
import LoginTest from "./Layouts/LoginTest";
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import "typeface-roboto";

/*const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8776D8"
    }
  }
});
*/
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path="/" component={Form} exact />
            <Route path="/login" component={LR} />
            <Route path="/about" component={LoginTest} />
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
