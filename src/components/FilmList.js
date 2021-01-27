import React, { useContext, useEffect } from 'react';
import { FilmContext } from '../contexts/FilmContext';
import FilmDetails from './FilmDetails';
import axios from 'axios';

const FilmList = () => {
    const { dispatch } = useContext(FilmContext);
    useEffect(() => {
        axios.get('/api/movies')
            .then((res) => {
                dispatch({type: 'LOAD_FILMS', film: res.data});
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);
    const { films } = useContext(FilmContext);
    console.log(films)
    return films.length ? ( 
        <div className="film-list">
            <ul>
                { films.map((film)=>{
                    return (
                        <FilmDetails film={film} key={film._id} />
                    )
                }) }
            </ul>
        </div>
     ) : (
         <div className="empty">Nothing to display</div>
     );
}
 
export default FilmList;