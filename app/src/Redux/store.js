import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducer';

const middleware = [thunk];

const store = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

export default store;
