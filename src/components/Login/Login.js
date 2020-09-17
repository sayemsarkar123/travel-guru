import React, { useContext, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './Login.css';
import { LoginContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { facebookAuth, googleAuth, initializeFirebaseApp, userSignIn, userSignUp } from './loginManager';

const Login = () => {
  initializeFirebaseApp();
  const [loginData, setLoginData] = useContext(LoginContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({isSignIn: false, isSignUp: false, fname: '', lname: '', isEmailValid: true, email: '', isPasswordValid: true, isSecondPasswordValid: true, password: ''});
  const [newUser, setNewUser] = useState(false);
  const formLineStyle = { width: '35%', height: '1px', backgroundColor: '#ccc' };

  const updateUserData = (userData) => {
    setUser(userData);
    setLoginData({...loginData, ...userData});
    history.replace(from);
  }

  const googleSignIn = () => {
    googleAuth().then(result => updateUserData(result));
  }
  const facebookSignIn = () => {
    facebookAuth().then(result => updateUserData(result));
  }
  const submitForm = (e) => {
    if (newUser && user.fname && user.lname && user.email && user.password && user.secondPassword && user.isSecondPasswordValid) {
      userSignUp(`${user.fname} ${user.lname}`, user.email, user.password).then(result => setUser({ ...user, isSignUp: result, isSignIn: false }));
    }
    if (!newUser && user.email && user.password) {
      userSignIn(user.email, user.password).then(result => result.error ? setUser({ ...user, isSignIn: result.error, isSignUp: false }) : updateUserData(result));
    }
    e.preventDefault();
  }
  const capitalizeWord = w => {
    if (typeof w !== 'string') return '';
    return w.charAt(0).toUpperCase() + w.slice(1);
  }
  const formValidation = (e) => {
    let isValid = true;
    if (e.target.name === 'email') {
      const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      isValid = re.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const re = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
      isValid = re.test(e.target.value);
    }
    const userInfo = { ...user };
    if (isValid) {
      userInfo[e.target.name] = e.target.value;
      userInfo[`is${capitalizeWord(e.target.name)}Valid`] = isValid;
    } else {
      userInfo[`is${capitalizeWord(e.target.name)}Valid`] = isValid;
    }
    if (e.target.name === 'secondPassword') {
      e.target.value === user.password ? userInfo.isSecondPasswordValid = true : userInfo.isSecondPasswordValid = false;
    }
    setUser(userInfo);
  }
  return (
    <Container>
      <Row>
        <Col md={12}>
            <Header>{{ color: '#bbb' }}</Header>
        </Col>
        <Col md={6} className="mx-auto">

          {newUser ? <SignUp user={user} submitForm={submitForm} formValidation={formValidation} newUser={newUser} setNewUser={setNewUser}></SignUp> : <SignIn user={user} submitForm={submitForm} formValidation={formValidation} newUser={newUser} setNewUser={setNewUser}></SignIn>}

          <div className="d-flex align-items-center justify-content-center mt-3">
            <div style={formLineStyle}></div>
            <span className="mx-2">Or</span>
            <div style={formLineStyle}></div>
          </div>

          <div onClick={facebookSignIn} className="my-3 p-1 d-flex align-items-center w-75 mx-auto border border-secondary rounded-pill" style={{cursor: 'pointer'}} >
            <div className="rounded-circle" style={{ width: '35px', height: '35px' }} >
              <Image src="https://i.ibb.co/QjbrvnV/fb.png" fluid />
            </div>
            <span className="mx-auto">Continue with Facebook</span>
          </div>

          <div onClick={googleSignIn} className="p-1 d-flex align-items-center w-75 mx-auto border border-secondary rounded-pill" style={{cursor: 'pointer'}}>
            <div className="rounded-circle" style={{ width: '30px', height: '30px' }} >
              <Image src="https://i.ibb.co/dkJLW0d/google.png" fluid />
            </div>
            <span className="mx-auto">Continue with Google</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;