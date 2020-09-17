import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const LocationPin = ({ text }) => {
  return (
    <div className="pin">
      <span className="pin-icon">
        <FontAwesomeIcon icon={faLocationArrow} />
      </span>
      <p className="pin-text">{text}</p>
    </div>
  );
};

export default LocationPin;
