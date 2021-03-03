import {React, useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { removeFilm } from '../actions/filmActions';
import FilmForm from './FilmForm';



const FilmDetails = (props) => {
    const [ film, setFilm ] = useState('');
    const [ editMode, setEditMode ] = useState(false);
    useEffect( () =>{
        const film = props.films.find((film) => {
            return film._id === props.match.params.id;
        });
        film ? setFilm(film) : props.history.push("/");
    }, [props.films, props.history, props.match.params.id]);


    const onHandleDelete = () =>{
        return props.dispatch(removeFilm(film._id));
    }
    const onOpenEditMode = () => {
        setEditMode(true)
    }
    const onCloseEditMode = () => {
        setEditMode(false)
    }
        return ( 
        
            <div>
    
               <div className="title">
                    { film.title } - { film.format } - { film.condition }
                    <button onClick={onHandleDelete}>Delete</button>
                    <button onClick={onOpenEditMode}>Edit</button>
                </div>
               { editMode && <FilmForm film={film} onCloseEditMode={onCloseEditMode} /> } 
            </div>
         );
    } 
   


const mapStateToProps = (state) => {
    return {
        films: state.films
    }
}
 
export default connect(mapStateToProps)(FilmDetails);