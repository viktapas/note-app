import { createStore } from 'redux';
import { combinedReducers } from './reducers';

export const store = createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
