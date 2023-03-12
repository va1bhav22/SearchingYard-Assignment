import { combineReducers } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SEARCHING_DATA_REQUEST, SEARCHING_DATA_SUCCESS, SEARCHING_DATA_FAILURE } from '../actionType/actionType.js';

const initialState = {
  loading: false,
  data: [],
  search_data:[],
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
        // data: [],
        error:true
      }

      case SEARCHING_DATA_REQUEST:
        return {
          ...state,
          loading: true
        }
      case SEARCHING_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          search_data: action.payload,
          error: false
        }
      case SEARCHING_DATA_FAILURE:
        return {
          ...state,
          loading: false,
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
