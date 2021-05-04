import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;

    return (
      <li className={`pokemon ${type}`}  id={ name }>
        <header className="card-header">
          <h4>{name}</h4>
        </header>

        <figure className="card-image">
          <img src={image} alt={name} />
        </figure>

        <section className="card-description">
          <p>Type: <span className='type'>{type}</span></p>
          <p>Average Weight: 
            <span className='weight'> {averageWeight.value} {averageWeight.measurementUnit}</span>
          </p>
        </section>
      </li>
    )
  };
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }).isRequired,
}

export default Pokemon;