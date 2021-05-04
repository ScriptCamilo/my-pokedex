import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/ElementButton.css'

class ElementButton extends Component {
  render() {
    const { type } = this.props;


    return (
      <button className={`element-button ${type}`}>{type}</button>
    )
  }
}

ElementButton.propTypes = {
  type: PropTypes.string.isRequired,
}

export default ElementButton;