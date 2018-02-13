import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button,
  Checkbox
} from "react-bootstrap";

const mapStateToProps = state => ({
  ...state.Common
});

const mapDispatchToProps = dispatch => ({
  ChangeFName: FName => dispatch({ type: "CHANGE_FNAME", payload: FName }),
  ChangeLName: LName => dispatch({ type: "CHANGE_LNAME", payload: LName }),
  ChangeMessage: message =>
    dispatch({ type: "CHANGE_MESSAGE", payload: message }),
  ChangeEmail: email => dispatch({ type: "CHANGE_EMAIL", payload: email }),
  ToggleAM: () => dispatch({ type: "TOGGLE_AM" }),
  TogglePM: () => dispatch({ type: "TOGGLE_PM" }),
  ChangeStreetAddress: StAdd =>
    dispatch({ type: "CHANGE_STREETADD", payload: StAdd }),
  ChangeCity: City => dispatch({ type: "CHANGE_CITY", payload: City }),
  ChangeUSstate: USstate =>
    dispatch({ type: "CHANGE_STATE", payload: USstate }),
  ChangeZip: Zip => dispatch({ type: "CHANGE_ZIP", payload: Zip }),
  ChangePhone: Phone => dispatch({ type: "CHANGE_PHONE", payload: Phone })
});

class Contact extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Contact">
        <h1>Contact Us</h1>
        <form className="contactForm">
          <FormGroup className="inputFeild col-lg-6">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              value={this.props.FName}
              placeholder="First Name"
              onChange={event => this.props.ChangeFName(event.target.value)}
            />
            <ControlLabel>Last Name</ControlLabel>

            <FormControl
              type="text"
              value={this.props.LName}
              placeholder="Last Name"
              onChange={event => this.props.ChangeLName(event.target.value)}
            />
          </FormGroup>
          <FormGroup className="inputFeild col-lg-6">
            <ControlLabel>Email</ControlLabel>

            <FormControl
              type="email"
              value={this.props.email}
              placeholder="Email"
              onChange={event => this.props.ChangeEmail(event.target.value)}
            />
            <ControlLabel>Phone Number</ControlLabel>

            <FormControl
              type="text"
              value={this.props.FName}
              placeholder="(555) 555-5555"
              onChange={event => this.props.ChangeFName(event.target.value)}
              // className="inputFeild"
            />
          </FormGroup>
          <FormGroup className="inputFeild col-lg-6">
            <ControlLabel>Street Address</ControlLabel>

            <FormControl
              type="text"
              value={this.props.LName}
              placeholder="Street Address"
              onChange={event => this.props.ChangeLName(event.target.value)}
            />
            <ControlLabel>City</ControlLabel>

            <FormControl
              type="text"
              value={this.props.FName}
              placeholder="City"
              onChange={event => this.props.ChangeFName(event.target.value)}
              // className="inputFeild"
            />
          </FormGroup>
          <FormGroup className="inputFeild col-lg-6">
            <ControlLabel>Zipcode</ControlLabel>

            <FormControl
              type="text"
              value={this.props.LName}
              placeholder="Zipcode"
              onChange={event => this.props.ChangeLName(event.target.value)}
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Prefered Service Window</ControlLabel>
            <Checkbox inline>AM</Checkbox> <Checkbox inline>PM</Checkbox>{" "}
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Message</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="What can we help you with?"
            />
          </FormGroup>
        </form>
        <Button onClick={() => console.log(this.props)}>Send</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
