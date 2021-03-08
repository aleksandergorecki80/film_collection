import React from 'react';
import { connect } from 'react-redux';
import { addImportedFilm } from '../../actions/importedFilmActions';
import { Link } from 'react-router-dom';

const Film = (props) => {
    const onClickHandle = () => {
        props.addImportedFilm(props.movie);
    }
    return ( 
        <li>
            <div>
                {`Id: ${props.movie.imdbID} - Title: ${props.movie.Title}`}
                {/* <img src={props.movie.Poster} alt="poster"/> */}

                    {/* <button onClick={onClickHandle}>Add to my collection</button> */}
                    <Link to="/confirm_data" onClick={onClickHandle}>Add to my collection</Link>

            </div>
        </li>
     );
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addImportedFilm: (film) => {dispatch(addImportedFilm(film))}
    }
}

export default connect(null, mapDispatchToProps)(Film);