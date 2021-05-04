import React, { Component } from 'react';
import PropTypes from 'prop-types';

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