import axios from 'axios';
import {
  GET_CARS_REQUEST,
  GET_CARS_FAILURE,
  GET_CARS_SUCCESS,
  SORT_BY,
} from './types';

export const getCars = () => async dispatch => {

  try {
   // dispatch({ type: GET_CARS_REQUEST });
    const res = await axios.get('/api/cars'); // <-- this is a promise
    dispatch({ type: GET_CARS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_CARS_FAILURE, payload: err });
  }
};

export const sortBy = (sortType) => ({
  sortType, type: SORT_BY,
});