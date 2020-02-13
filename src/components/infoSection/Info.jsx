import React from 'react';
import ModalComment from '../Modal';
import './info.css';

function Info() {
  return (
    <div className="container-info">
      <div className="info-section-one">
        <div className="part-one">
            <h1>To the contrary</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium elit sit a
                met porttitor suscipit. Sed egestas urna tortor, ut ornare libero eleifend a. Aliquam felis urna, 
                iaculis vel blandit ac, placerat non libero. In bibendum arcu vitae aliquet maximus. In consectetur 
                aliquet purus a fermentum. 
            </p>
            <ul>
                <li>aliquet purus a fermentum.</li>
                <li>aliquet purus a fermentum.</li>
            </ul>
        </div>  
        <div>
            <ModalComment />
        </div>
      </div>
      <div className="info-section-two">
        <div className="part-one">
            <h1>Treatise</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium elit sit a
                met porttitor suscipit. Sed egestas urna tortor, ut ornare libero eleifend a. Aliquam felis urna, 
                iaculis vel blandit ac, placerat non libero. In bibendum arcu vitae aliquet maximus. In consectetur 
                aliquet purus a fermentum. 
            </p>
            <ul>
                <li>aliquet purus a fermentum.</li>
                <li>aliquet purus a fermentum.</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Info;