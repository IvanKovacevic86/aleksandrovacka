import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Naslovna from './pages/Naslovna';
import Lov from './pages/Lov';
import Novosti from './pages/Novosti';
import Linkovi from './pages/Linkovi';
import Kontakt from './pages/Kontakt';
import Bretonm from './pages/Bretonm';
import Nltm from './pages/Nltm';
import Nopz from './pages/Nopz';
import Poenterm from './pages/Poenterm';
import Bretonz from './pages/Bretonz';
import Nltz from './pages/Nltz';
import Nopm from './pages/Nopm';
import Poenterz from './pages/Poenterz';
import Nop from './pages/Nop';
import Nlt from './pages/Nlt';
import Breton from './pages/Breton';
import Poenter from './pages/Poenter';




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
            <Bretonm path="Bretonm" />
            <Bretonz path="Bretonz" />
            <Nltm path="Nltm" />
            <Nltz path="Nltz" />
            <Nopm path="Nopm" />
            <Nopz path="Nopz" />
            <Poenterm path="Poenterm" />
            <Poenterz path="Poenterz" />
            <Poenter path="Poenter" />
            <Breton path="Breton" />
            <Nop path="Nop" />
            <Nlt path="Nlt" />

          </Router>

        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
