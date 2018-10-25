// Dependencies
import React from 'react';
import PropTypes from 'prop-types'
import './Contact.css';

// Stateless component / Functional component
const Field = (props) => (
  <div>
    <label className="labelLeft">{props.label}</label>
    <input className="text"
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
      className={props.className}
    />
    <br/>
  </div>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  //textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  className:PropTypes.string.isRequired,
};

// Field.defaultProps = {
//   textarea: false,
// };

export default Field;