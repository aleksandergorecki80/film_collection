import React from 'react';
import Film from './Film';

const FilmsList = ({ moviesList }) => {
  return moviesList.length ? (
    <div>
      <ul>
        {moviesList.map((movie) => {
          return <Film movie={movie} key={movie.imdbID} />;
        })}
      </ul>
    </div>
  ) : (
    <div>Nothing to display</div>
  );
};

export default FilmsList;
