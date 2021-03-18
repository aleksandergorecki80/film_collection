import React from 'react';
import { connect } from 'react-redux';
import { addImportedFilm } from '../../actions/importedFilmActions';
import { Link } from 'react-router-dom';

const Film = (props) => {
  const onClickHandle = () => {
    props.addImportedFilm(props.movie);
  };
  return (
      <div className="thumbnail">
        <img src={props.movie.Poster} alt="poster" className="thumbnail-cover"/>
        {`${props.movie.Title}`}
        <Link to="/confirm_data" onClick={onClickHandle} className="btn btn-add a-no-underline">
          Add to my collection
        </Link>
      </div>

  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImportedFilm: (film) => {
      dispatch(addImportedFilm(film));
    },
  };
};

export default connect(null, mapDispatchToProps)(Film);
