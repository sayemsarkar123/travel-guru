import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoginContext } from '../../App';
import hotelsData from '../../fakeData/hotelsData';
import locationData from '../../fakeData/locationData';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';
import Map from '../Map/Map';
import './Dashboard.css';

const Dashboard = () => {
  const [hotels, setHotels] = useState([]);
  const [loginData, setLoginData] = useContext(LoginContext);
  useEffect(() => {
    setHotels(hotelsData);
  }, []);
  const [location, setLocation] = useState({});
  useEffect(() => {
    setLocation(locationData.find(place => place.address === loginData.place));
  }, [loginData]);
  return (
      <Container>
        <Row>
          <Col md={10} className="mx-auto">
              <Header>{{ color: '#ccc', dashboard: true }}</Header>
          </Col>
          <Col md={10} className="mx-auto">
            <Row>
              <Col md={6}>
              <h6>252 stays Apr 13-17 3 guest</h6>
              <h3>Stay in {loginData.place}</h3>
              {
                hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)
              }
              </Col>
            <Col md={6}>
              {loginData.place && <Map location={location} zoomLevel={17} ></Map>}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default Dashboard;