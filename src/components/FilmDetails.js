import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { removeFilm } from '../actions/filmActions';
import { Link } from 'react-router-dom';

const FilmDetails = (props) => {
  const [film, setFilm] = useState('');
  useEffect(() => {
    const film = props.films.find((film) => {
      return film._id === props.match.params.id;
    });
    film ? setFilm(film) : props.history.push('/');
  }, [props.films, props.history, props.match.params.id]);

  const onHandleDelete = () => {
    return props.removeFilm(film._id);
  };
  return (
    <div>
      <div className="title">
        {film.title} - {film.format} - {film.condition}
        <p><img src={`/uploads/${film.posterName}`} alt="cover"/></p>
        <button onClick={onHandleDelete}>Delete</button>
        <Link to={`/edit_film/${props.match.params.id}`}>Edit</Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFilm: (_id) => {
      dispatch(removeFilm(_id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
