import React, { Component } from "react";
import { connect } from "react-redux";
import Dots from "react-activity/lib/Dots";
import "react-activity/lib/Dots/Dots.css";

import sendMail from "../agent";
import USSTATES from "../assets/ds";

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
  },
  ToggleSendFlag: () => dispatch({ type: "TOGGLE_SEND_FLAG" })
});

class Contact extends Component {
  checkValidation = () => {
    this.props.ToggleSendFlag();
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
      this.props.ToggleSendFlag();
    }
  };

  activityToggler = () => {
    if (!this.props.SendFlag) {
      return "Send";
    } else {
      return <Dots />;
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
            <p>
              <label className="label">First Name</label>

              <input
                type="text"
                className="input"
                value={this.props.FName}
                placeholder="First Name"
                onChange={event => {
                  this.props.ChangeFName(event.target.value);
                }}
                required
              />
            </p>
            <p>
              <label className="label">Last Name</label>

              <input
                type="text"
                className="input"
                value={this.props.LName}
                placeholder="Last Name"
                onChange={event => this.props.ChangeLName(event.target.value)}
              />
            </p>
            <p>
              <label className="label">Email</label>

              <input
                type="email"
                className="input"
                value={this.props.email}
                placeholder="Email"
                onChange={event => {
                  this.props.ChangeEmail(event.target.value);
                }}
                required
              />
            </p>
            <p>
              <label className="label">Phone Number</label>

              <input
                type="tel"
                id="telNo"
                className="tel"
                value={this.props.phone}
                placeholder="(555) 555-5555"
                onChange={event => {
                  this.props.ChangePhone(event.target.value);
                }}
                required
              />
            </p>
            <p>
              <label className="label">Street Address</label>

              <input
                type="text"
                className="input"
                value={this.props.streetAddress}
                placeholder="Street Address"
                onChange={event =>
                  this.props.ChangeStreetAddress(event.target.value)
                }
              />
            </p>
            <p>
              <label className="label">City</label>

              <input
                type="text"
                className="input"
                value={this.props.city}
                placeholder="City"
                onChange={event => this.props.ChangeCity(event.target.value)}
              />
            </p>
            <p>
              <label className="label">State</label>

              <select
                onChange={event => this.props.ChangeUSstate(event.target.value)}
              >
                {USSTATES.map(ST => (
                  <option key={ST} value={ST}>
                    {ST}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <label className="label">Zipcode</label>

              <input
                type="text"
                className="input"
                value={this.props.zip}
                placeholder="Zipcode"
                onChange={event => this.props.ChangeZip(event.target.value)}
              />
            </p>
            <p>
              <label className="AMPM">
                Prefered Service Window
                <br />
                <label>
                  {" "}
                  AM<input
                    type="checkbox"
                    className="AMPM"
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
                    className="AMPM"
                    value="PM"
                    checked={this.props.PM}
                    onChange={() => this.props.TogglePM()}
                  />
                </label>
              </label>
            </p>
            <p className="full">
              <label className="label">Message</label>
              <br />
              <textarea
                className="message"
                value={this.props.message}
                onChange={event => this.props.ChangeMessage(event.target.value)}
                placeholder="What can we help you with?"
              />{" "}
            </p>{" "}
            <button
              type="submit"
              id="submitButton"
              className="full"
              onClick={e => {
                this.checkValidation();
                this.handleSend();
                // console.log(this.props);
              }}
            >
              {this.activityToggler()}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
