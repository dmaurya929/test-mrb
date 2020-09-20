import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Transition from './transition';
import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';

import {Form, Button} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from './Dashboard' ;

function App() {
  return (
    <Router>
     <Dashboard/>
    </Router>
  );
}

export default App;
