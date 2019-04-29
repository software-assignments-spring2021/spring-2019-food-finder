import React from "react";
import reactDOM from "react-dom";
import "./Login.css";
import TransitionGroup from "react-transition-group";
import FadeTransition from "./transitions/fadeTransition";
import axios from "axios";

class LR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isRegisterOpen: false });
  }

  showRegisterBox() {
    this.setState({ isRegisterOpen: true, isLoginOpen: false });
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Login
          </div>

          <div
            className={
              "controller " +
              (this.state.isRegisterOpen ? "selected-controller" : "")
            }
            onClick={this.showRegisterBox.bind(this)}
          >
            Register
          </div>
        </div>

        <FadeTransition isOpen={this.state.isLoginOpen} duration={0}>
          <div className="box-container">
            <LoginBox />
          </div>
        </FadeTransition>

        <FadeTransition isOpen={this.state.isRegisterOpen} duration={0}>
          <div className="box-container">
            <RegisterBox />
          </div>
        </FadeTransition>
      </div>
    );
  }
}

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  submitLogin(e) {}

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  render() {
    const { email, password } = this.state;
    const isEnabled1 =
      email.length > 0 && password.length > 0 && validateEmail(email);
    return (
      <div className="inner-container">
        <div className="header">Login</div>

        <div className="box">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange.bind(this)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="Password"
            />
          </div>

          <button
            type="button"
            //className="login-btn"
            onClick={this.submitLogin.bind(this)}
            disabled={!isEnabled1}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

function pop(props) {
  return;
}

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      newUser: null,
      errors: [],
      pwdState: null
    };
  }

  submitRegister = e => {

    axios.get("/test2", { params: this.state }).then(res => {
      const userInfo = res.data;
      this.setState({ userInfo });

      console.log("res data: "+ res.data);
    });

    // will console log the statements but won't store into the variable
    // an issue with the setState function and poosibly a need
    // to implement post request in backend --> need to resolve
    if (this.username === "") {
      this.showValidationErr("username", "Username Cannot be empty!");
    } else {
        this.setState({
          username: this.state.username,
        });
        console.log("username: "+ this.state.username);
    }
    if (this.state.email === "") {
      this.showValidationErr("email", "Email Cannot be empty!");
    } else {
        this.setState({
          email: this.state.email,
        });
        console.log("email: "+ this.state.email);
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    } else {
        this.setState({
          password: this.state.password,
        });
        console.log("pw: "+ this.state.password);
    }

  }

  validateFormRegister() {
    return (
      this.state.email.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [
        ...prevState.errors,
        {
          elm,
          msg
        }
      ]
    }));
  }

  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }
  onConfirmPasswordChange(e) {
    this.setState({ confirmPassword: e.target.value });
    this.clearValidationErr("confirmPassword");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");

    this.setState({ pwdState: "weak" });
    if (e.target.value.length > 8 && e.target.value.length < 12) {
      this.setState({ pwdState: "medium" });
    } else if (e.target.value.length > 12) {
      this.setState({ pwdState: "strong" });
    }
  }

<<<<<<< HEAD
  // commented this out and put in into the first submitRegister function above
=======
>>>>>>> 1af85f6f6701ab270b5fcbaf200248e397a4278b
 // submitRegister(e) {

    // if (e.username === "") {
    //   this.showValidationErr("username", "Username Cannot be empty!");
    // } else {
    //     console.log("state: "+ this.state);
    //     this.setState({
    //       username: this.state.username,
    //     });
    // }
    // if (this.state.email === "") {
    //   this.showValidationErr("email", "Email Cannot be empty!");
    // } else {
    //     console.log("state: "+ this.state);
    //     this.setState({
    //       email: this.state.email,
    //     });
    // }
    // if (this.state.password === "") {
    //   this.showValidationErr("password", "Password Cannot be empty!");
    // } else {
    //   console.log("state: "+ this.state);
    //     this.setState({
    //       password: this.state.password,
    //     });
    // }

    // axios.get("/test2", {params: this.state}).then(res => {
    //   const userInfo = res.data;
    //   this.setState({userInfo});
    // });

 // }

  render() {
    const { username, email, password, confirmPassword } = this.state;
    const isEnabled =
      email.length > 0 &&
      password.length > 0 &&
      username.length > 0 &&
      password == confirmPassword &&
      validateEmail(email);

    let usernameErr = null,
      passwordErr = null,
      emailErr = null;

    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
      }
    }

    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;

    if (this.state.pwdState === "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState === "medium") {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState === "strong") {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }

    return (
      <div className="inner-container">
        <div className="header">Register</div>

        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onUsernameChange.bind(this)}
            />
            <small className="danger-error">
              {usernameErr ? usernameErr : ""}
            </small>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="login-input"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />

            <small className="danger-error">{emailErr ? emailErr : ""}</small>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange.bind(this)}
            />
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>

            {this.state.password && (
              <div className="password-state">
                <div className={"pwd pwd-weak " + (pwdWeak ? "show" : "")} />
                <div
                  className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}
                />
                <div
                  className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}
                />
              </div>
            )}
            <div className="input-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="login-input"
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.onConfirmPasswordChange.bind(this)}
              />

              <small className="danger-error">{emailErr ? emailErr : ""}</small>
            </div>
          </div>

          <button
            type="button"
            //className="login-btn"
            onClick={this.submitRegister.bind(this)}
            disabled={!isEnabled}
          >
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default LR;

function validateEmail(email) {
  var validity = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validity.test(String(email).toLowerCase());
}
