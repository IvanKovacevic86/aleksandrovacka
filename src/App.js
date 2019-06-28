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
import Breton1 from './pages/Breton1';
import Nlt1 from './pages/Nlt1';
import Nop2 from './pages/Nop2';
import Poenter1 from './pages/Poenter1';
import Breton2 from './pages/Breton2';
import Nlt2 from './pages/Nlt2';
import Nop1 from './pages/Nop1';
import Poenter2 from './pages/Poenter2';
import Nop from './pages/Nop';
import Nlt from './pages/Nlt';
import Breton from './pages/Breton';
import Poenter from './pages/Poenter';
import Odgajivacnica  from './pages/Odgajivacnica';




class App extends Component {
  render() {
   
    return (
      <div className="container nh">
       
        <Header /> 
        <div className="nh2">
        <Nav />
          
          <Router style={{width: "100%"}}>

            <Naslovna path="/" />
            <Odgajivacnica path="Odgajivacnica" />
            <Lov path="Lov" />
            <Novosti path="Novosti" />
            <Linkovi path="Linkovi" />
            <Kontakt path="Kontakt" />
            <Breton1 path="Breton1" />
            <Breton2 path="Breton2" />
            <Nlt1 path="Nlt1" />
            <Nlt2 path="Nlt2" />
            <Nop1 path="Nop1" />
            <Nop2 path="Nop2" />
            <Poenter1 path="Poenter1" />
            <Poenter2 path="Poenter2" />
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
