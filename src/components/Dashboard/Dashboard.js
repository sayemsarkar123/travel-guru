import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LoginContext } from '../../App';
import hotelsData from '../../fakeData/hotelsData';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';
import './Dashboard.css';

const Dashboard = () => {
  const [hotels, setHotels] = useState([]);
  const [loginData, setLoginData] = useContext(LoginContext);
  useEffect(() => {
    setHotels(hotelsData);
  }, []);
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
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default Dashboard;