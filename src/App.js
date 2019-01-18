import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Naslovna from './pages/Naslovna';
import Lov from './pages/Lov';
import Novosti from './pages/Novosti';
import Linkovi from './pages/Linkovi';
import Kontakt from './pages/Kontakt';
import Breton from './pages/Breton';
import Nlt from './pages/Nlt';
import Nop from './pages/Nop';
import Poenter from './pages/Poenter';
import Breton1 from './pages/Breton1';
import Nlt1 from './pages/Nlt1';
import Nop1 from './pages/Nop1';
import Poenter1 from './pages/Poenter1';



class App extends Component {
  render() {
   
    return (
      <div className="container nh">
       
        <Header /> 
        <div className="nh2">
        <Nav />
          
          <Router>

            <Naslovna path="/" />
            <Lov path="Lov" />
            <Novosti path="Novosti" />
            <Linkovi path="Linkovi" />
            <Kontakt path="Kontakt" />
            <Breton path="Breton" />
            <Breton1 path="Breton1" />
            <Nlt path="Nlt" />
            <Nlt1 path="Nlt1" />
            <Nop path="Nop" />
            <Nop1 path="Nop1" />
            <Poenter path="Poenter" />
            <Poenter1 path="Poenter1" />

          </Router>

        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
