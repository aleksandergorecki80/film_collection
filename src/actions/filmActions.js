import axios from 'axios';

export const removeFilm = (_id) => {
    return { type: 'REMOVE_FILM', _id }
};

// export const addFilm = (film) => {
//     return { type: 'ADD_FILM', film }
// };

export const addFilm = (film) => {
    return (dispatch, getState) => {
        // async call to DB
        console.log(film)
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