import React, { useContext } from 'react';
import { FilmContext } from '../contexts/FilmContext';

const FilmDetails = (props) => {
    const { dispatch } = useContext(FilmContext);
    return ( 
        <li>
            <div className="title">
                { props.film.title } - { props.film.format }
                <button onClick={()=>dispatch({type: 'REMOVE_FILM', id: props.film.id})}>Delete</button>
            </div>
        </li>
     );
}
 
export default FilmDetails;