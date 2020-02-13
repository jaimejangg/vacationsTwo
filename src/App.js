import React from 'react';
import NavBar from "./components/NavBar";
import Carousel from './components/Carousel';
import Info from './components/infoSection/Info';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="carousel-container">
        <Carousel />
      </div>
      <Info />
    </div>
  );
}

export default App;
