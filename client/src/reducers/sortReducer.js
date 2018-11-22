import { SORT_BY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SORT_BY:
      return action.sortType || false;
    default:
      return state;
  }
}

export const sortBy = (cars, sortType) => {
  return cars.sort((a, b) => {
    if (sortType.length < 1) sortType = 'name';
    var itemA = a[sortType].toLowerCase(), itemB = b[sortType].toLowerCase()
    if (itemA < itemB) //sort string ascending
        return -1 
    if (itemA > itemB)
        return 1
    return 0 //default return value (no sorting)
  })
  return cars;
}
