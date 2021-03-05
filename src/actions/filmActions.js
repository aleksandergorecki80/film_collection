import axios from 'axios';

export const  fetchFilmsFromDB = () => {
    return (dispatch) => {
        return axios.get('/api/movies')
        .then((res) => {
            console.log(res.data)
            dispatch(loadFilmList(res.data))
        })
        .catch((err) => {
            console.log(err);
        })
    }
  
}

export const loadFilmList = (films) => {
    return { type: 'LOAD_FILMS', films }
}


export const removeFilm = (_id) => {
    return { type: 'REMOVE_FILM', _id }
};

// export const addFilm = (film) => {
//     return { type: 'ADD_FILM', film }
// };

export const addFilm = (film) => {
    return (dispatch, getState) => {
        // async call to DB
        axios.post('/api/movies', {
            title: film.title,
            format: film.format,
            condition: film.condition
        }).then(()=>{
            dispatch({ type: 'ADD_FILM', film});
        }).catch((err)=>{
            console.log(err, 'err');
        })
        
    }
}

export const editFilm = (film) => {
    return { type: 'EDIT_FILM', film }
};

