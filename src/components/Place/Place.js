import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './Place.css';

const Place = ({ place, setSearchPlace }) => {
  const { name, picture } = place;
  return (
    <Col md={4} onClick={() => setSearchPlace(name)}>
      <div className="position-relative">
        <Image src={picture} fluid></Image>
        <h3 className="position-absolute text-center mb-3" style={{left: '0', right: '0', bottom: '0', color: '#fff'}}>{name}</h3>
      </div>
    </Col>
  );
};

export default Place;