import React from 'react';
import BuyButton from './BuyButton';
import '../stylesheets/car.css';

const Car = ({ car }) => (
  <div className="card-row" key={car.id}>
    <div className="center-flex">
      <img src={car.picture} alt={`Car Picture: #${car.name}`} />
    </div>
    <div className="card-content">
      <div className="card-title">
        <div className="car-name">Name: {car.name}</div>
        Make: {car.make} 
        <br></br>
        Model: {car.model}  
        <br></br>
        Year: {car.year} 
        <br></br>
        Availability {car.available}
      </div>
    </div>
    <div className="buyButton">	
	    <BuyButton available={car.available} />
    </div>
    <hr/>
  </div>
);

export default Car;
