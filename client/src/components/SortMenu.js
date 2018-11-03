import React from 'react';
import SortButton from './SortButton';
import '../stylesheets/SortMenu.css';

const SortMenu = () => (
  <div className="sort-by-list">
    <SortButton sortType="available" />  <SortButton sortType="name" />
  </div>
);

export default SortMenu;
