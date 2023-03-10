import {RESENTMOVIE_DATA_FAILURE,RESENTMOVIE_DATA_REQUEST,RESENTMOVIE_DATA_SUCCESS, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SEARCHING_DATA_REQUEST, SEARCHING_DATA_SUCCESS, SEARCHING_DATA_FAILURE, SIMILIARE_DATA_SUCCESS, SIMILIARE_DATA_FAILURE, SIMILIARE_DATA_REQUEST,BANNER_DATA_FAILURE,BANNER_DATA_SUCCESS,BANNER_DATA_REQUEST } from '../actionType/actionType';
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


export const fetchSearchRequest = () => {
  return {
    type: SEARCHING_DATA_REQUEST
  }
}

export const fetchSearchSuccess = data => {
  return {
    type: SEARCHING_DATA_SUCCESS,
    payload: data
  }
}

export const fetchSearchFailure = error => {
  return {
    type: SEARCHING_DATA_FAILURE,
    payload: error
  }
}

export const resentDataRequest = () => {
  return {
    type: RESENTMOVIE_DATA_REQUEST
  }
}

export const resentDataSuccess = data => {
  return {
    type: RESENTMOVIE_DATA_SUCCESS,
    payload: data
  }
}

export const resentDataFailure = error => {
  return {
    type: RESENTMOVIE_DATA_FAILURE,
    payload: error
  }
}




export const similarDataRequest = () => {
  return {
    type: SIMILIARE_DATA_REQUEST
  }
}

export const similarDataSuccess = data => {
  return {
    type: SIMILIARE_DATA_SUCCESS,
    payload: data
  }
}

export const similarDataFailure = error => {
  return {
    type: SIMILIARE_DATA_FAILURE,
    payload: error
  }
}



export const bannerDataRequest = () => {
  return {
    type: BANNER_DATA_REQUEST
  }
}

export const bannerDataSuccess = data => {
  return {
    type: BANNER_DATA_SUCCESS,
    payload: data
  }
}

export const bannerDataFailure = error => {
  return {
    type: BANNER_DATA_FAILURE,
    payload: error
  }
}




export const fetchData = (page) => {
  return (dispatch) => {
    dispatch(fetchDataRequest())
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a8fd72cec737865b11d1fec97071918a&language=en-US&page=${page}`)
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


export const seachingData = (search) => {
  return (dispatch) => {
    dispatch(fetchSearchRequest())
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a8fd72cec737865b11d1fec97071918a&query=${search}`)
      .then(response => {
        const data = response.data
        dispatch(fetchSearchSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchSearchFailure(errorMsg))
      })
  }
}

export const resentMovieData = () => {
  return (dispatch) => {
    dispatch(resentDataRequest())
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a8fd72cec737865b11d1fec97071918a&language=en-US&page=1')
      .then(response => {
        const data = response.data
        dispatch(resentDataSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(resentDataFailure(errorMsg))
      })
  }
}


export const similarData = (id) => {
  return (dispatch) => {
    dispatch(similarDataRequest())
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a8fd72cec737865b11d1fec97071918a&language=en-US&page=1`)
      .then(response => {
        const data = response.data
        dispatch(similarDataSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(similarDataFailure(errorMsg))
      })
  }
}


export const bannerData = () => {
  return (dispatch) => {
    dispatch(bannerDataRequest())
    axios.get("https://api.themoviedb.org/3/movie/latest?api_key=a8fd72cec737865b11d1fec97071918a&language=en-US")
      .then(response => {
        const data = response.data
        dispatch(bannerDataSuccess(data))
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(bannerDataFailure(errorMsg))
      })
  }
}