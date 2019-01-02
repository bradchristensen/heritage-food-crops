import React, { PureComponent } from "react";
import fetch from "isomorphic-fetch";
import title from "../infrastructure/documentTitle";

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

class ContactUs extends PureComponent {
  submitContactForm = async event => {
    event.preventDefault();

    if (!this.state.name) {
      this.setState({ validationError: "Please enter your name." });
      return;
    }

    if (!this.state.email) {
      this.setState({ validationError: "Please enter your email address." });
      return;
    }

    // Check basic email address format without checking content
    // https://stackoverflow.com/a/742588
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.state.email)) {
      const validationError = (
        <span>
          The email address ‘
          {
            // If we used a setState callback here, technically the value
            // could have changed between when we checked to see if it was
            // valid and when we accessed it again, so using the current
            // state is more correct here.
            // eslint-disable-next-line react/no-access-state-in-setstate
            this.state.email
          }
          ’ appears to be invalid. Please enter a valid email address.
        </span>
      );
      this.setState({ validationError });
      return;
    }

    if (!this.state.message) {
      this.setState({ validationError: "Please enter a message." });
      return;
    }

    this.setState({ submittingContactForm: true });

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          location: this.state.location,
          message: this.state.message
        })
      });

      // Should return a 204, otherwise throw an error
      checkStatus(response);

      this.setState({
        message: "",
        submittingContactForm: false,
        submittedContactForm: true
      });
    } catch (err) {
      this.setState({
        submittingContactForm: false,
        submittedContactForm: true,
        submitError: true
      });
      console.error(err);
    }
  };

  onInputChange = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
      validationError: undefined
    });
  };

  onNameChange = event => this.onInputChange(event, "name");
  onEmailChange = event => this.onInputChange(event, "email");
  onPhoneChange = event => this.onInputChange(event, "phone");
  onLocationChange = event => this.onInputChange(event, "location");
  onMessageChange = event => this.onInputChange(event, "message");

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      location: "",
      message: "",
      submittingContactForm: false,
      submittedContactForm: false,
      submitError: false
    };
  }

  render() {
    const emailLink = (
      <a href="mailto:info@heritagefoodcrops.org.nz">
        info@heritagefoodcrops.org.nz
      </a>
    );

    const physicalAddress = (
      <p>
        <strong>
          {"Heritage Food Crops Research Trust"}
          <br />
          {"126A Springvale Road,"}
          <br />
          {"Whanganui 4501"}
          <br />
          {"New Zealand"}
        </strong>
      </p>
    );

    const sendButtonText = this.state.submittingContactForm
      ? "Sending..."
      : "Send";

    return (
      <div className="wrapper">
        <div className="wrapper wrap-900">
          <div className="box">
            <h2>Donations Toward the Research</h2>

            <p>
              The Heritage Food Crops Research Trust is a registered New Zealand
              Charitable Trust working to find natural plant-based solutions to
              combat disease. We operate from funding received from charitable
              grants and donations from members of the public. Trustees and
              staff of the Trust work on an unpaid, voluntary basis. We would
              very much appreciate your support to assist us in the work that we
              do.
            </p>

            <p>
              Donations help to conserve an array of heritage plant material
              (from heritage fruit trees to heirloom bean varieties), and
              support the Trust's research endeavours to find the best fruit and
              vegetable varieties for human health.
            </p>

            <p>
              Donations may be made by cheque or bank deposit. Cheques may be
              sent to the following address:
            </p>

            {physicalAddress}

            <p>
              Our bank account number is <strong>06-0793-0299259-00</strong>{" "}
              (ANZ Bank).
            </p>

            <p>
              Donations are tax-deductible in New Zealand.{" "}
              <strong>
                Please provide your name and address using our contact form
                below
              </strong>{" "}
              so that we can send you a donation receipt, which you can use to
              claim the tax deduction.
            </p>

            <h3>Adopt a Bean</h3>

            <p>
              Play a part in conserving one or more rare and ancient bean
              varieties. Once imported, these varieties will be grown in
              Whanganui on the 2.2 hectare property managed by the Trust. As
              soon as we are able to produce fresh seed we will make them
              available to seed saving organisations around the country. Our
              goals are to maintain the seeds in our collection so that we can
              ensure their availability for present and future generations; to
              have an abundant supply to distribute as widely as possible; and
              to be able to research and discover their health potential.
            </p>

            <p>
              To make a donation toward this project, please contact us using
              the details below, from which we can provide you more information.
            </p>
          </div>

          <div className="box">
            <h2>Contact Us</h2>

            <p>
              We can be reached by email at {emailLink}, or by post at the
              following address:
            </p>

            {physicalAddress}

            <p>
              Alternatively you may use the contact form below to contact the
              Trust with any comments, feedback or queries you may have
              regarding our work. To contact a specific member of the Trust,
              please state whom in the message, and the mail will be passed on
              to them if possible.
            </p>

            <form>
              <h4>Name *</h4>
              <p>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.onNameChange}
                />
              </p>

              <h4>Email address *</h4>
              <p>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
              </p>

              <h4>Contact phone</h4>
              <p>
                <input
                  type="text"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onPhoneChange}
                />
              </p>

              <h4>Where are you from?</h4>
              <p>
                <input
                  type="text"
                  name="location"
                  value={this.state.location}
                  onChange={this.onLocationChange}
                />
              </p>

              <h4>Message *</h4>
              <p>
                <textarea
                  rows="10"
                  name="message"
                  value={this.state.message}
                  onChange={this.onMessageChange}
                />
              </p>

              {Boolean(this.state.validationError) && (
                <p className="validation-error">{this.state.validationError}</p>
              )}

              <p>
                {!this.state.submittedContactForm && (
                  <button
                    type="submit"
                    onClick={this.submitContactForm}
                    disabled={Boolean(this.state.submittingContactForm)}
                  >
                    {sendButtonText}
                  </button>
                )}

                {this.state.submittedContactForm &&
                  (this.state.submitError ? (
                    <span>
                      Sorry! An error occurred. Please try again later.
                    </span>
                  ) : (
                    <strong>
                      Thanks for your message! We'll get back to you as soon as
                      we can.
                    </strong>
                  ))}
              </p>
            </form>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default title(ContactUs, "Contact Us");
