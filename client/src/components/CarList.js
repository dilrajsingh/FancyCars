import React from 'react';
import Car from './Car';
import { connect } from 'react-redux';
import { sortBy } from '../reducers/sortReducer';


const CarList = ({ cars, sort }) => (

  <div className="col m9">
    {cars.length ? (
      cars.map(car => <Car key={car.id} car={car} />)
    ) : (
      <div className="center">Loading ...</div>
    )}
  </div>
);

const mapStateToProps = ({ cars,  sort }) => ({
   sort, cars: sortBy(cars, sort),

});

export default connect(mapStateToProps)(CarList);
