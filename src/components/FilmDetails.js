import {React, useState} from 'react';
import { connect } from 'react-redux';

import { removeFilm } from '../actions/filmActions';
import FilmForm from './FilmForm';

const FilmDetails = (props) => {
    const [editMode, setEditMode ] = useState(false);
    const onHandleDelete = () =>{
        return props.dispatch(removeFilm(props.film._id));
    }
    const onOpenEditMode = () => {
        setEditMode(true)
    }
    const onCloseEditMode = () => {
        setEditMode(false)
    }
    console.log(editMode, 'editMode')
    return ( 
        
        <div>
        <li>
            <div className="title">
                { props.film.title } - { props.film.format } - { props.film.condition }
                <button onClick={onHandleDelete}>Delete</button>
                <button onClick={onOpenEditMode}>Edit</button>
            </div>
        </li>
           { editMode && <FilmForm film={props.film} onCloseEditMode={onCloseEditMode} /> }
        </div>
     );
}
 
export default connect()(FilmDetails);