import React, { Component } from "react";
import { connect } from "react-redux";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Checkbox
} from "react-bootstrap";

import sendMail from "../agent";

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
  ChangePhone: Phone => dispatch({ type: "CHANGE_PHONE", payload: Phone }),
  ChangeValidationState: value => {
    dispatch({
      type: "CHANGE_VALIDATION_STATE",
      payload: value
    });
  }
});

class Contact extends Component {
  checkValidation = () => {
    if (
      (!this.props.email.includes("@") && this.props.validationStates.email) ||
      (this.props.email.includes("@") && !this.props.validationStates.email)
    ) {
      this.props.ChangeValidationState("email");
    }
    if (
      (this.props.FName.trim() === "" && this.props.validationStates.FName) ||
      (this.props.FName.trim() !== "" && !this.props.validationStates.FName)
    ) {
      this.props.ChangeValidationState("FName");
    }
    if (
      (this.props.phone.length < 10 && this.props.validationStates.phone) ||
      (this.props.phone.length >= 10 && !this.props.validationStates.phone)
    ) {
      this.props.ChangeValidationState("phone");
    }
  };

  handleSend = () => {
    if (
      this.props.phone.length >= 10 &&
      this.props.FName.trim() !== "" &&
      this.props.email.includes("@")
    ) {
      let SW;
      if (this.props.AM && this.props.PM) {
        SW = "All Day";
      } else if (!this.props.AM && !this.props.PM) {
        SW = "None Selected";
      } else if (this.props.AM) {
        SW = "AM";
      } else if (this.props.PM) {
        SW = "PM";
      } else {
        SW = "ERROR: Contact sender for Service Window";
      }

      let body = {
        FName: this.props.FName.trim(),
        LName: this.props.LName.trim() || "No Input",
        email: this.props.email.trim(),
        phone: this.props.phone.trim(),
        streetAddress: this.props.streetAddress.trim() || "No Input",
        city: this.props.city.trim() || "No Input",
        USstate: this.props.USstate.trim() || "No Input",
        zip: this.props.zip.trim() || "No Input",
        message: this.props.message || "No Input",
        serviceWindow: SW
      };

      console.log(body);

      sendMail.create(body);
    } else {
      return null;
    }
  };

  getValidationState = thing => {
    if (!this.props.validationStates[thing]) {
      return "error";
    }
  };

  render() {
    return (
      <div>
        <h1 className="Contact">Contact Us</h1>
        <div className="formWrapper">
          <form className="contactForm">
            <FormGroup validationState={this.getValidationState("FName")}>
              <ControlLabel>First Name</ControlLabel>
              {!this.props.validationStates.FName && (
                <ControlLabel className="warning">Name required.</ControlLabel>
              )}
              <FormControl
                type="text"
                value={this.props.FName}
                placeholder="First Name"
                onChange={event => {
                  this.props.ChangeFName(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Last Name</ControlLabel>
              <FormControl
                type="text"
                value={this.props.LName}
                placeholder="Last Name"
                onChange={event => this.props.ChangeLName(event.target.value)}
              />
            </FormGroup>
            <FormGroup validationState={this.getValidationState("email")}>
              <ControlLabel>Email</ControlLabel>
              {!this.props.validationStates.email && (
                <ControlLabel className="warning">
                  Not a valid email address.
                </ControlLabel>
              )}
              <FormControl
                type="email"
                value={this.props.email}
                placeholder="Email"
                onChange={event => {
                  this.props.ChangeEmail(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup validationState={this.getValidationState("phone")}>
              <ControlLabel>Phone Number </ControlLabel>
              {!this.props.validationStates.phone && (
                <ControlLabel className="warning">
                  Not a valid phone number.
                </ControlLabel>
              )}
              <FormControl
                type="text"
                value={this.props.phone}
                placeholder="(555) 555-5555"
                onChange={event => {
                  this.props.ChangePhone(event.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Street Address</ControlLabel>
              <FormControl
                type="text"
                value={this.props.streetAddress}
                placeholder="Street Address"
                onChange={event =>
                  this.props.ChangeStreetAddress(event.target.value)
                }
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>City</ControlLabel>
              <FormControl
                type="text"
                value={this.props.city}
                placeholder="City"
                onChange={event => this.props.ChangeCity(event.target.value)}
                // className="inputFeild"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>State</ControlLabel>
              <FormControl
                type="text"
                value={this.props.USstate}
                placeholder="State"
                onChange={event => this.props.ChangeUSstate(event.target.value)}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Zipcode</ControlLabel>
              <FormControl
                type="text"
                value={this.props.zip}
                placeholder="Zipcode"
                onChange={event => this.props.ChangeZip(event.target.value)}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup className="AMPM">
              <ControlLabel className="AMPM">
                Prefered Service Window
              </ControlLabel>
              <Checkbox
                inline
                value={this.props.AM}
                onChange={() => this.props.ToggleAM()}
              >
                AM
              </Checkbox>{" "}
              <Checkbox
                value={this.props.PM}
                onChange={() => this.props.TogglePM()}
                inline
              >
                PM
              </Checkbox>
            </FormGroup>
            <FormGroup className="message" controlId="formControlsTextarea">
              <ControlLabel>Message</ControlLabel>
              <FormControl
                componentClass="textarea"
                value={this.props.message}
                onChange={event => this.props.ChangeMessage(event.target.value)}
                placeholder="What can we help you with?"
              />
            </FormGroup>
          </form>
          <Button
            type="submit"
            id="submitButton"
            onClick={() => {
              this.checkValidation();
              this.handleSend();
              // console.log(this.props);
            }}
          >
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
