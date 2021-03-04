import { combineReducers } from 'redux';

import FilmReducer from './filmReducer';

const rootReducer = combineReducers({
    films: FilmReducer,
    // filters: filtersReducer
})

export default rootReducer;