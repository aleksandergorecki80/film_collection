import axios from 'axios';

export const fetchFilmsFromDB = () => {
  return (dispatch) => {
    return axios
      .get('/api/movies')
      .then((res) => {
        dispatch({ type: 'LOAD_FILMS', films: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeFilm = (_id) => {
  return (dispatch) => {
    return axios
      .delete(`/api/movies/${_id}`)
      .then(() => {
        dispatch({ type: 'REMOVE_FILM', _id });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addFilm = (film) => {
  return (dispatch, getState) => {
    axios
      .post('/api/movies', film)
      .then(() => {
        dispatch({ type: 'ADD_FILM', film });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editFilm = (film, _id) => {
  return (dispatch) => {
    return axios
      .put(`/api/movies/${_id}`, film)
      .then(() => {
        dispatch({ type: 'EDIT_FILM', film });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
