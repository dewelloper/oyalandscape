// Dependencies
import React, { Component } from 'react';
// Externals
import Field from './Field';
import Button from './Button';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }


  render() {
    return (
      <div>
        {/* Name field */}
        {/* Email field */}
        <Field
          label="email / tel:"
          onChange={(event) => this.updateField('subject', event.target.value)}
          value={this.state.subject} ref="subject" className="leftPadding"
        />
        {/* Message textarea */}
        <textarea rows="4"  className="leftPadding"
          label="Not"
          onChange={(event) => this.updateField('message', event.target.value)}
          /* This should be written like 'textarea' */
          value={this.state.message} ref="message"
        />
        <br/>
        {/* Submit button */}
        <Button
          email="dewelloper@gmail.com"
          formValues={this.state}
        />
      </div>
    );
  }
}

export default Form;