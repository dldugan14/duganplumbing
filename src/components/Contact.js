import React, { Component } from "react";
import { connect } from "react-redux";

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
            <label className="label">
              First Name
              <input
                type="text"
                className="input"
                value={this.props.FName}
                placeholder="First Name"
                onChange={event => {
                  this.props.ChangeFName(event.target.value);
                }}
              />
            </label>
            <label className="label">
              Last Name
              <input
                type="text"
                className="input"
                value={this.props.LName}
                placeholder="Last Name"
                onChange={event => this.props.ChangeLName(event.target.value)}
              />
            </label>
            <label className="label">
              Email
              {/* {!this.props.validationStates.email && (
                <label className="warning">
                  Not a valid email address.
                </label>
              )} */}
              <input
                type="email"
                className="input"
                value={this.props.email}
                placeholder="Email"
                onChange={event => {
                  this.props.ChangeEmail(event.target.value);
                }}
              />
            </label>
            <label className="label">
              Phone Number
              {!this.props.validationStates.phone && (
                <label className="warning">Not a valid phone number.</label>
              )}
              <input
                type="text"
                className="input"
                value={this.props.phone}
                placeholder="(555) 555-5555"
                onChange={event => {
                  this.props.ChangePhone(event.target.value);
                }}
              />
            </label>
            <label className="label">
              Street Address
              <input
                type="text"
                className="input"
                value={this.props.streetAddress}
                placeholder="Street Address"
                onChange={event =>
                  this.props.ChangeStreetAddress(event.target.value)
                }
              />
            </label>
            <label className="label">
              City
              <input
                type="text"
                className="input"
                value={this.props.city}
                placeholder="City"
                onChange={event => this.props.ChangeCity(event.target.value)}
                // className="inputFeild"
              />
            </label>
            <label className="label">
              State
              <input
                type="text"
                className="input"
                value={this.props.USstate}
                placeholder="State"
                onChange={event => this.props.ChangeUSstate(event.target.value)}
              />
            </label>
            <label className="label">
              Zipcode
              <input
                type="text"
                className="input"
                value={this.props.zip}
                placeholder="Zipcode"
                onChange={event => this.props.ChangeZip(event.target.value)}
              />
            </label>
            <label className="AMPM">
              Prefered Service Window
              <br />
              <label>
                {" "}
                AM<input
                  type="checkbox"
                  className="input"
                  value="AM"
                  checked={this.props.AM}
                  onChange={() => this.props.ToggleAM()}
                />
              </label>
              <label>
                {" "}
                PM
                <input
                  type="checkbox"
                  className="input"
                  value="PM"
                  checked={this.props.PM}
                  onChange={() => this.props.TogglePM()}
                />
              </label>
            </label>
            <label className="label">
              Message
              <textarea
                className="input"
                value={this.props.message}
                onChange={event => this.props.ChangeMessage(event.target.value)}
                placeholder="What can we help you with?"
              />
            </label>
          </form>
          <button
            type="submit"
            id="submitButton"
            onClick={() => {
              this.checkValidation();
              this.handleSend();
              // console.log(this.props);
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
