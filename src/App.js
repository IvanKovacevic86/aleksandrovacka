import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Naslovna from './components/Naslovna';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container nh">
       
        <Header />
        <div className="nh2">
          <Nav />
          <Naslovna/>
        </div>
        <Footer/>

      </div>
    );
  }
}

export default App;
