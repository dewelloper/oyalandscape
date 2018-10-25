// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Contact.css';



class Button extends Component {
  // Info on React PropTypes:
  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      subject: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event) {
    console.log('Form Values', this.props.formValues);
    this.setState({ isClicked: true });

    event.preventDefault();
        fetch('/Email', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                subject: this.props.formValues['subject'],
                content: this.props.formValues['message'],
             }),
            headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }),
            })
        .then((response) => response.text())
        .then((responseText) => {
            alert(responseText);
        })
        .catch((error) => {
            console.error(error);
        }); 
}

  render() {
    return (
      <button className="btn leftPadding"
        disabled={this.state.isClicked}
        onClick={this.logFormDataToConsole}
      >
        Notunuzu Gönderin
      </button>
    );
  }
}

export default Button;