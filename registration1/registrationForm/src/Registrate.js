import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import LoaderButton from "./components/LoaderButton";

import "./Registrate.css";


export default class Registrate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.name.length > 0 &&
      /\d/.test(this.state.name) === false &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }
  renderForm() {
    return (
      <Form onSubmit={this.handleSubmit}>
        
        <Form.Group controlId="name" bsSize="large">
          Enter Your Name:
          
          <Form.Control
            autoFocus
            type="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          </Form.Group>
        <Form.Group controlId="email" bsSize="large">
          Enter Your Email:
          <Form.Control
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          Enter Password:
          <Form.Control
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" bsSize="large">
          Confirm Password:
          <Form.Control
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </Form.Group>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
      </Form>

    );
  }
  render() {
    return (
      <div className="Registrate">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }

}

