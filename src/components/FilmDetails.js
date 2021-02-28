import {React, useState} from 'react';
import { connect } from 'react-redux';

import { removeFilm } from '../actions/filmActions';
import FilmForm from './FilmForm';

const FilmDetails = (props) => {
    const [editMode, setEditMode ] = useState(false);
    const onHandleDelete = () =>{
        return props.dispatch(removeFilm(props.film._id));
    }
    const onHandleEdit = () => {
        setEditMode(true)
    }
    return ( 
        <div>
        <li>
            <div className="title">
                { props.film.title } - { props.film.format } - { props.film.condition }
                <button onClick={onHandleDelete}>Delete</button>
                <button onClick={onHandleEdit}>Edit</button>
            </div>
        </li>
           { editMode && <FilmForm film={props.film}/> }
        </div>
     );
}
 
export default connect()(FilmDetails);