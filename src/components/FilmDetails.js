import React, { useContext } from 'react';
import { FilmContext } from '../contexts/FilmContext';
import { removeFilm } from '../actions/filmActions';

const FilmDetails = (props) => {
    console.log(props.film._id)
    const { dispatch } = useContext(FilmContext);
    return ( 
        <li>
            <div className="title">
                { props.film.title } - { props.film.format }
                <button onClick={()=>dispatch(removeFilm(props.film._id))}>Delete</button>
            </div>
        </li>
     );
}
 
export default FilmDetails;