import React, { createContext,  useReducer } from 'react';
import { filmReducer } from '../reducers/filmReducer';

export const FilmContext = createContext();

const FilmContextProvider = (props) => {
    
    // pobiera informacje z local storage
    // const intValue = () => {
    //     const localData = localStorage.getItem('films');
    //     return localData ? JSON.parse(localData) : [];
    // }

    // const [ films, dispatch ] = useReducer( filmReducer, [], intValue); / inicjuje liste filmów z local storage

    const [ films, dispatch ] = useReducer( filmReducer, []);
    
    // zapisuje filmy do local storage
    // useEffect(() => {
    //     localStorage.setItem('films', JSON.stringify(films));
    // }, [films]);
    
    return ( 
        <FilmContext.Provider value={{films, dispatch}}>
            { props.children }
        </FilmContext.Provider>
     );
};
 
export default FilmContextProvider;