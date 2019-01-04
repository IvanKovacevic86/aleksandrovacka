import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Index';
import Nav from './components/Nav/Index';
import Footer from './components/Footer/Index';
import Naslovna from './components/Naslovna/Index';

class App extends Component {
  render() {
    return (
      <div>
        {/*
        <Header />
        <Nav />
        */}
        <Naslovna/>
      </div>
    );
  }
}

export default App;
