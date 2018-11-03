import { GET_CARS_SUCCESS, GET_CARS_REQUEST } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_CARS_REQUEST:
      break;
    case GET_CARS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
