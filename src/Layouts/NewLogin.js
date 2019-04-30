import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  TextField,
  Button,
  MenuItem,
  FormControl,
  Grid,
  Tabs,
  Tab,
  Divider
} from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: 10,
    flexGrow: 1
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 200
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      value: 0
    };
  }

  onSubmit = e => {};

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { classes } = this.props;
    switch (value) {
      case 0:
        return (
          <Fragment>
            <Tabs
              value={this.state.value}
              onChange={this.handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              centered
              className={classes.root}
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleChange("username")}
                    helperText="Username must be at least 8 characters"
                    margin="normal"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    helperText="Password must contain "
                    margin="normal"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => this.onSubmit()}
                  color="secondary"
                  margin="small"
                  size="large"
                  variant="raised"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Fragment>
        );
      case 1:
        return (
          <Fragment>
            <Tabs
              value={this.state.value}
              onChange={this.handleChangeTab}
              indicatorColor="primary"
              textColor="primary"
              centered
              className={classes.root}
            >
              <Tab label="Login" />
              <Tab label="Register" />
            </Tabs>

            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={0}
            >
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleChange("username")}
                    helperText="Username must be at least 8 characters"
                    margin="normal"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange("email")}
                    helperText=""
                    margin="normal"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    helperText=""
                    margin="normal"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl}>
                  <TextField
                    label="Confirm Password"
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    margin="normal"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={() => this.onSubmit()}
                  color="secondary"
                  margin="small"
                  size="large"
                  variant="raised"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Fragment>
        );
      // no default
    }
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
