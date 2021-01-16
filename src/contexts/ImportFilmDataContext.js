import React, { createContext, useEffect, useReducer } from 'react';
import { importFilmDataReducer } from '../reducers/importFilmDataReducer';

export const ImportFilmDataContext = createContext();

const ImportFilmDataContextProvider = (props) => {

    const [ importedFilmsData, dispatch ] = useReducer( importFilmDataReducer, [] );

    return (
        <ImportFilmDataContext.Provider value={{ importedFilmsData, dispatch }}>
            { props.children }
        </ImportFilmDataContext.Provider>
    );
};

export default ImportFilmDataContextProvider;
