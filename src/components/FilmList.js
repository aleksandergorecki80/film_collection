import React, { useContext } from 'react';
import { FilmContext } from '../contexts/FilmContext';
import FilmDetails from './FilmDetails';

const FilmList = () => {
    const { films } = useContext(FilmContext);
    return films.length ? ( 
        <div className="film-list">
            <ul>
                { films.map((film)=>{
                    return (
                        <FilmDetails film={film} key={film.id} />
                    )
                }) }
            </ul>
        </div>
     ) : (
         <div className="empty">Nothing to display</div>
     );
}
 
export default FilmList;