import axios from 'axios';

export const fetchFilmsFromDB = () => {
  return (dispatch) => {
    return axios
      .get('/api/movies')
      .then((res) => {
        dispatch(fetchFilmsAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchFilmsAction = (films) => {
  return { type: 'LOAD_FILMS', films }
}

export const removeFilm = (_id) => {
  return (dispatch) => {
    return axios
      .delete(`/api/movies/${_id}`)
      .then(() => {
        dispatch(removeFilmAction(_id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeFilmAction = (_id) => {
  return { type: 'REMOVE_FILM', _id };
}

export const addFilm = (film) => {
  return (dispatch, getState) => {
    axios
      .post('/api/movies', film)
      .then(() => {
        dispatch(addFilmAction(film));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addFilmAction = (film) => {
  return {
    type: 'ADD_FILM', film 
  }
}

export const editFilm = (film, _id) => {
  return (dispatch) => {
    return axios
      .put(`/api/movies/${_id}`, film)
      .then(() => {
        dispatch(editFilmAction(film, _id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editFilmAction = (film, _id) => {
  return { type: 'EDIT_FILM', film, _id }
}
