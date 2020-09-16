import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Hotel = ({ hotel }) => {
  const { picture, title, rating, price } = hotel;
  return (
    <Row className="my-4">
      <Col md={5}>
        <Image src={picture} fluid/>
      </Col>
      <Col md={7}>
        <h6>{title}</h6>
        <p className="m-1">4 guests 2 bedrooms 2 beds 2 baths</p>
        <p className="m-1">Wifi Air condition Kitchen</p>
        <p className="m-1">Cencellation flexability availiable</p>
        <p className="m-1"><span style={{color: 'goldenrod'}}><FontAwesomeIcon icon={faStar} /></span> <span>{rating}</span> <span><span style={{fontWeight: 'bold'}}>${price}/</span> night</span></p>
      </Col>
    </Row>
  );
};

export default Hotel;