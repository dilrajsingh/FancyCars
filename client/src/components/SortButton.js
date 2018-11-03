import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../stylesheets/SortButton.css';


const SortButton = ({sortType, sortBy}) => (
  <div className="sort-button">
    <button onClick={() => sortBy(sortType)}> Sort by: {sortType}</button>
  </div>
);

export default connect(null, actions)(SortButton);