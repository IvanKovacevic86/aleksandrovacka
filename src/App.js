import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Naslovna from './pages/Naslovna';
import Lov from './pages/Lov';
import Novosti from './pages/Novosti';



class App extends Component {
  render() {
    return (
      <div className="container nh">
       
        <Header />
        <div className="nh2">
          <Nav />
          
          <Router>
            <Naslovna path="Naslovna" />
            <Lov path="Lov" />
            <Novosti path="Novosti" />
          </Router>

        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
