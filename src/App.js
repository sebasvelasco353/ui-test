import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Components
import Navbar from './Components/Navbar';
// Pages
import Home from './Pages/Home'
import PastTrials from './Pages/PastTrials'
import Login from './Pages/Login'
import HowItWorks from './Pages/HowItWorks'

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path="/PastTrials">
          <PastTrials />
        </Route>
        <Route path="/HowItWorks">
          <HowItWorks />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
