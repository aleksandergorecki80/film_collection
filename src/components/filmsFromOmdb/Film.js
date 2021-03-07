import React from 'react';
import { connect } from 'react-redux';
import { addImportedFilm } from '../../actions/importedFilmActions';

const Film = (props) => {
    const onClickHandle = () => {
        console.log(props);
        props.addImportedFilm(props.movie);
    }
    return ( 
        <li>
            <div>
                {`Id: ${props.movie.imdbID} - Title: ${props.movie.Title}`}
                {/* <img src={movie.Poster} alt="poster"/> */}

                    <button onClick={onClickHandle}>Add to my collection</button>

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