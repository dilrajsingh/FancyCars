import React from 'react';
import '../stylesheets/BuyButton.css';

const BuyButton = ({ available }) => (
  <div>
    {available === 'In Dealership' ? (
      <button className="enabled-button">Buy me now!</button>
    ) : 
    (
      <button className="disabled-button" disabled>{available}</button>
    )}
  </div>
);

export default BuyButton;