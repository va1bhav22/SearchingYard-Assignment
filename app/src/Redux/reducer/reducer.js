import { combineReducers } from "redux";
import {
  RESENTMOVIE_DATA_FAILURE,
  RESENTMOVIE_DATA_REQUEST,
  RESENTMOVIE_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  SEARCHING_DATA_REQUEST,
  SEARCHING_DATA_SUCCESS,
  SEARCHING_DATA_FAILURE,
  SIMILIARE_DATA_SUCCESS,
  BANNER_DATA_SUCCESS,
} from "../actionType/actionType.js";

const initialState = {
  loading: false,
  data: [],
  search_data: [],
  resentData: [],
  simliar: [],
  banner : [],
  error: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: false,
      };
    case FETCH_DATA_FAILURE:
      return {
        loading: false,
        // data: [],
        error: true,
      };

    case SEARCHING_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCHING_DATA_SUCCESS:
      let data = [action.payload];
      localStorage.setItem("search", JSON.stringify(data));
      return {
        ...state,
        loading: false,
        search_data: action.payload,
        error: false,
      };
    case SEARCHING_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case RESENTMOVIE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESENTMOVIE_DATA_SUCCESS:
      console.log(action.payload);
      return {
        loading: false,
        resentData: action.payload,
        error: false,
      };
    case RESENTMOVIE_DATA_FAILURE:
      return {
        loading: false,
        error: true,
      };
    case SIMILIARE_DATA_SUCCESS:
      console.log("similare", action.payload);
      return {
        ...state,
        simliar: action.payload,
      };

      case BANNER_DATA_SUCCESS:
      console.log("banner", action.payload);
      return {
        ...state,
        banner: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
