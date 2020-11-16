import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FilmContext = createContext();

const FilmContextProvider = (props) => {
    const [ films, setFilms ] = useState([
        { title: 'Terminator', format: 'DVD', id: 1},
        { title: 'Terminator 2', format: 'BluRey', id: 2},
        { title: 'Terminator 3', format: 'DVD', id: 3},
    ]);
    const addFilm = (title, format) => {
        setFilms([...films, {title, format, id: uuidv4()}]);
    }
    const removeFilm = (id) => {
        setFilms(films.filter((film) => {
            return id !== film.id
        }));
    }
    return ( 
        <FilmContext.Provider value={{films, addFilm, removeFilm}}>
            { props.children }
        </FilmContext.Provider>
     );
}
 
export default FilmContextProvider;