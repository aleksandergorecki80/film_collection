export const removeFilm = (_id) => {
    return {type: 'REMOVE_FILM', _id}
};

export const addFilm = (film) => {
    return {type: 'ADD_FILM', film}
};

export const editFilm = (film) => {
    return {type: 'EDIT_FILM', film}
};