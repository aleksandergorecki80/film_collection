import React, { useContext } from 'react';
import { FilmContext } from '../contexts/FilmContext';

const FilmDetails = (props) => {
    const { removeFilm } = useContext(FilmContext);
    return ( 
        <li>
            <div className="title">
                { props.film.title } - { props.film.format }
                <button onClick={()=>removeFilm(props.film.id)}>Delete</button>
            </div>
        </li>
     );
}
 
export default FilmDetails;