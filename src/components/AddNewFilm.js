import React, { useState } from 'react';
import SearchForFilmData from './filmsFromOmdb/SearchForFilmData';
import FilmForm from './FilmForm';

const AddNewFilm = (props) => {
  const [addingMethod, setAddingMethod] = useState('search');
  return (
    <div>
      <button 
          onClick={() => {setAddingMethod('search')}}
          className="btn btn-add btn-inline"
        >Serach in OMDb
      </button>
      <button 
        onClick={() => {setAddingMethod('')}}
        className="btn btn-add"
        >Add data manually
      </button>
      {addingMethod === 'search' ? (
        <SearchForFilmData />
      ) : (
        <FilmForm {...props} />
      )}
    </div>
  );
};

export default AddNewFilm;
