import { combineReducers } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actionType/actionType.js';

const initialState = {
  loading: false,
  data: [],
  error:false
}

const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false
      }
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        data: [],
        error:true
      }
     
    default:
      return state
  }
}

const rootReducer = combineReducers({
  data: dataReducer
})

export default rootReducer;
