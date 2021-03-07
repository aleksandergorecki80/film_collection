import { combineReducers } from 'redux';

import FilmReducer from './filmReducer';
import importedFilmDataReducer from './importedFilmDataReducer';

const rootReducer = combineReducers({
    films: FilmReducer,
    importedData: importedFilmDataReducer
})

export default rootReducer;