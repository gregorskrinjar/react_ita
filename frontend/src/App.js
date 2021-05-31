//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter, Switch, Route, Link, Redirect, Router } from 'react-router-dom';
import PrijavnaFormaMain from './PrijavnaFormaMain';
import GalerijaMain from './GalerijaMain';
import ProtectedRoute from '../src/routes/ProtectedRoute'
//import "~bootstrap/scss/bootstrap";

function checkAuth(nextState, replaceState) {
  let { loggedIn } = true;
}
const isAuth = localStorage.getItem('token');

function App() {
  return (

    <React.Fragment>
      <BrowserRouter data-testid="router">
        <Switch>
          <Route exact path='/' component={GalerijaMain} />
          <Route exact path='/Login' component={PrijavnaFormaMain} />
          {/* <Route exact path='/Home' component={Home} /> */}
          
        </Switch>
        <ProtectedRoute exact path='/Home' component={Home} isAuth={isAuth} />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App;