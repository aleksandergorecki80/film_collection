import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { filmReducer } from '../reducers/filmReducer';

export const FilmContext = createContext();

const FilmContextProvider = (props) => {
    const [ films, dispatch ] = useReducer( filmReducer, []);
    


    return ( 
        <FilmContext.Provider value={{films, dispatch}}>
            { props.children }
        </FilmContext.Provider>
     );
}
 
export default FilmContextProvider;