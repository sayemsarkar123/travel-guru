import React, { useContext } from 'react';
import { Button, Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap';
import logo from './logo.svg';
import './Header.css';
import { LoginContext } from '../../App';
import { useHistory } from 'react-router-dom';

const Header = ({ children }) => {
  const [loginData, setLoginData] = useContext(LoginContext);
  const history = useHistory();
  const headerStyle = children;
  return (
    <Navbar>
      <Navbar.Brand href="#home"><Image src={logo} style={{maxWidth: '100px'}}/></Navbar.Brand>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search your Destination..."
          className="ml-sm-4"
        />
      </Form>
      <Nav className="ml-auto">
        <Nav.Link style={headerStyle} href="/news">News</Nav.Link>
        <Nav.Link style={headerStyle} className="ml-4" href="/destination">Destination</Nav.Link>
        <Nav.Link style={headerStyle} className="ml-4" href="blog">Blog</Nav.Link>
        <Nav.Link style={headerStyle} className="ml-4" href="/contact">Contact</Nav.Link>
      </Nav>
      {
        children.dashboard
          ? <span><b>{loginData.name}</b></span>
          : loginData.isSignIn
              ? <Button onClick={() => setLoginData({})} variant="warning" className="ml-4">Log Out</Button>
              : <Button onClick={() => history.push('/login')} variant="warning" className="ml-4">Login</Button>
      }
    </Navbar>
  );
};

export default Header;
