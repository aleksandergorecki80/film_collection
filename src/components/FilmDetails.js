import React from 'react';
import { connect } from 'react-redux';
// import { FilmContext } from '../contexts/FilmContext';
import { removeFilm } from '../actions/filmActions';

const FilmDetails = (props) => {
    const onClickHandle = () =>{
        return props.dispatch(removeFilm(props.film._id));
    }
    return ( 
        <li>
            <div className="title">
                { props.film.title } - { props.film.format } - { props.film.condition }
                <button onClick={onClickHandle}>Delete</button>
            </div>
        </li>
     );
}
 
export default connect()(FilmDetails);