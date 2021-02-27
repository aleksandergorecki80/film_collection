import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
// import { ImportFilmDataContext } from '../../contexts/ImportFilmDataContext';

const Film = ({ movie }) => {
    // const { dispatch } = useContext(ImportFilmDataContext);
    const onClickHandle = () => {
        console.log(movie.Title);
        // dispatch({type: 'ADD_IMPORTED_FILM', film: {
        //     title: movie.Title
        // }})
    }
    return ( 
        <li>
            <div>
                {`Id: ${movie.imdbID} - Title: ${movie.Title}`}
                {/* <img src={movie.Poster} /> */}
                <Link to="/confirmData">
                    <button onClick={onClickHandle}>Add to my collection</button>
                </Link>
            </div>
        </li>
     );
}
 
export default Film;