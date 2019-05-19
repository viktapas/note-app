import { createStore } from "redux";
import { combinedReducers } from "./reducers";

function saveDataToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
}

function fetchDataFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const persistedState = fetchDataFromLocalStorage();

const store = createStore(
  combinedReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => saveDataToLocalStorage(store.getState()));

export default store;
