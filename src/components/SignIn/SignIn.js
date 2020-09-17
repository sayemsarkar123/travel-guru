import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignIn.css';

const SignIn = ({ newUser, setNewUser, submitForm, formValidation, user }) => {
  return (
<div className="p-5 rounded" style={{border: '2px solid #ccc'}}>
      <h5 className="mb-3">Login</h5>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Control onChange={formValidation} type="email" name="email" placeholder="Username or Email" className="border-left-0 border-right-0 border-top-0" />
          <Form.Text className="text-danger pl-2">
            {user.isEmailValid || 'Enter a valid email'}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Control onChange={formValidation} type="password" name="password" placeholder="Password" className="border-left-0 border-right-0 border-top-0" />
          <Form.Text className="text-danger pl-2">
            {user.isPasswordValid || 'Enter a valid password'}
          </Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit" className="d-block w-100 text-center my-4">
            Login
        </Button>
      </Form>
      {
        user.isSignIn && <h5 className="text-danger text-center my-3">{user.isSignIn}</h5>
      }
      <h5 className="text-center">Don't have an account? <span onClick={() => setNewUser(!newUser)} className="text-warning" style={{cursor: 'pointer'}}>Create an account</span></h5>
    </div>
  );
};

export default SignIn;