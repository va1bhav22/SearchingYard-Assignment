import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actionType/actionType';
import axios from 'axios';

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST
  }
}

export const fetchDataSuccess = data => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: data
  }
}

export const fetchDataFailure = error => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error
  }
}



export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a8fd72cec737865b11d1fec97071918a&language=en-US&page=1')
      .then(response => {
        const data = response.data
        dispatch(fetchDataSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchDataFailure(errorMsg))
      })
  }
}


