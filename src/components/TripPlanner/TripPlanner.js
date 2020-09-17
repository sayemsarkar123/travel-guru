import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import touristPlaces from '../../fakeData/touristPlaces';
import Header from '../Header/Header';

const TripPlanner = () => {
  const history = useHistory();
  const { placeId } = useParams();
  const [place, setPlace] = useState({});
  useEffect(() => {
    setPlace(touristPlaces.find(touristPlace => touristPlace.id === +placeId));
  }, []);
  const getDateValue = () => {
    return `${new Date().getFullYear()}-${new Date().getMonth() < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}-${new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()}`
  }
  const formInputStyle = { backgroundColor: '#F2F2F2' }
  const formLabelStyle = { color: '#B1B1B1' };
  return (
    <Container fluid className="vh-100 d-flex flex-column" style={{backgroundImage: `url(${place.picture})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <Row className="mt-3">
        <Col md={10} className="mx-auto">
          <Header>{{ color: '#fff' }}</Header>
        </Col>
      </Row>
      <Row className="my-auto">
        <Col md={10} className="mx-auto">
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 text-uppercase mb-4" style={{color: '#fff'}}>{place.name}</h1>
              <p style={{color: 'rgba(255 255 255 / 85%)'}}>{place.description}</p>
            </Col>
            <Col md={6}>
              <div className="p-4" style={{backgroundColor: '#fff', borderRadius: '5px'}}>
              <Form>
                  <Form.Group>
                    <Form.Label style={formLabelStyle}>Origin</Form.Label>
                    <Form.Control className="py-4" style={formInputStyle} type="text" placeholder="Dhaka" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label style={formLabelStyle}>Destination</Form.Label>
                    <Form.Control className="py-4" style={formInputStyle} type="text" defaultValue={place.name}/>
                  </Form.Group>
                  <Form.Row>
                    <Col>
                    <Form.Group>
                    <Form.Label style={formLabelStyle}>Form</Form.Label>
                    <Form.Control className="py-4" style={formInputStyle} type="date" defaultValue={getDateValue()}/>
                  </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group>
                    <Form.Label style={formLabelStyle}>To</Form.Label>
                    <Form.Control className="py-4" style={formInputStyle} type="date" defaultValue={getDateValue()}/>
                  </Form.Group>
                    </Col>
                  </Form.Row>
                  <Button onClick={() => history.push('/dashboard')} className="d-block w-100 text-center py-3" variant="warning" type="submit">
                    Start Booking
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TripPlanner;