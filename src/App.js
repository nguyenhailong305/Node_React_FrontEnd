import React, { Component } from 'react';
import Nav from  './Component/Nav.js';
import Header from './Component/Header.js';
import About from './Component/About.js';
import Service from './Component/Service.js';
import Portfolio from './Component/Portfolio.js';
import Calltoaction from './Component/Calltoaction.js';
import Map from './Component/Map.js';
import Footer from './Component/Footer.js';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>
          <Header/>
          <About/>
          <Service/>
          <Portfolio/>
          <Calltoaction/>
          <Map/>
          <Footer/>

      </div>
    );
  }
}

export default App;