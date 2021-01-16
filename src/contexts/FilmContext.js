import React, { createContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { filmReducer } from '../reducers/filmReducer';

export const FilmContext = createContext();

const FilmContextProvider = (props) => {
    const intValue = () => {
        const localData = localStorage.getItem('films');
        return localData ? JSON.parse(localData) : [];
    }
    const [ films, dispatch ] = useReducer( filmReducer, [], intValue);
    useEffect(() => {
        localStorage.setItem('films', JSON.stringify(films));
    }, [films]);
    return ( 
        <FilmContext.Provider value={{films, dispatch}}>
            { props.children }
        </FilmContext.Provider>
     );
};
 
export default FilmContextProvider;