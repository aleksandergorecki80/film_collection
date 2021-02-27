import { createStore, combineReducers } from 'redux';

import FilmReducer from '../reducers/filmReducer';
// import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      films: FilmReducer,
      // filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
