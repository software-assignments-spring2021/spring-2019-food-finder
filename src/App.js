import React, { Fragment, Component } from "react";
import { Form } from "./HomepageForm/index";
import { Header } from "./Layouts";
import LR from "./Layouts/Login";
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Results from "./Layouts/Results";
import About from "./Layouts/About";
import "typeface-roboto";

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
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Fragment>
            <Header />
            <Route path="/" component={Form} exact />
            <Route path="/login" component={LR} />
            <Route path="/results" component={Results} />
            <Route path="/about" component={About} />
            <Route
              path="/github"
              component={() => (
                window.open(
                  "https://github.com/nyu-software-engineering/food-finder",
                  "_blank"
                ),
                (window.location = "/")
              )}
            />
          </Fragment>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
