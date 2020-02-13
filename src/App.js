import React from 'react';
import NavBar from "./components/NavBar";
import Carousel from './components/Carousel';

import './App.css';

function App() {
  return (
    <div className="container-app">
      <NavBar />
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
