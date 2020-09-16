import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import touristPlaces from '../../fakeData/touristPlaces';
import Header from '../Header/Header';
import Place from '../Place/Place';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import './Home.css';
import { useHistory } from 'react-router-dom';
import { LoginContext } from '../../App';

const Home = () => {
  const [loginData, setLoginData] = useContext(LoginContext);
  const [places, setPlaces] = useState([]);
  const [searchPlace, setSearchPlace] = useState(`Cox's Bazar`);
  const [place, setPlace] = useState({});
  useEffect(() => {
    setPlaces(touristPlaces);
    setPlace(touristPlaces.find(touristPlace => touristPlace.name === searchPlace));
    const newData = { ...loginData, place: searchPlace };
    setLoginData(newData);
  }, [searchPlace]);
  const history = useHistory();
  return (
    <Container fluid className="vh-100 d-flex flex-column" style={{backgroundImage: `url(${place.picture})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <Row>
        <Col md={10} className="mx-auto mt-4">
          <Header>{{ color: '#fff' }}</Header>
        </Col>
      </Row>
      <Row className="my-auto">
      <Col md={11} className="ml-auto mt-5">
          <Row>
            <Col md={5}>
              <h1 className="text-uppercase" style={{color: '#fff'}}>{place.name}</h1>
              <p className="my-4" style={{color: '#fff'}}>{place.short}...</p>
              <Button onClick={() => history.push(`/place/${place.id}`)} variant="warning">Booking <span>&#8594;</span></Button>
            </Col>
            <Col md={7}>
              <Row>
                {
                  places.map(touristPlace => <Place key={touristPlace.id} place={touristPlace} setSearchPlace={setSearchPlace}></Place>)
                }
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center mb-auto">
          <span className="border border-primary rounded-circle p-3 d-inline-block" style={{width: '50px', height: '50px', backgroundColor: '#fff'}}> <span className="d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faAngleLeft} /></span> </span>
          <span className="border border-primary rounded-circle p-3 d-inline-block ml-2" style={{width: '50px', height: '50px', backgroundColor: '#fff'}}> <span className="d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faAngleRight} /></span> </span>
        </div>
    </Container>
  );
};

export default Home;
