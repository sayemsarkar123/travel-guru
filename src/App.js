import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import TripPlanner from './components/TripPlanner/TripPlanner';

export const LoginContext = createContext();

const App = () => {
  const [loginData, setLoginData] = useState({});
  return (
    <LoginContext.Provider value={[loginData, setLoginData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/place/:placeId">
            <TripPlanner></TripPlanner>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
        </Router>
    </LoginContext.Provider>
  );
};

export default App;