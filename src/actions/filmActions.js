export const removeFilm = (id) => {
    return {type: 'REMOVE_FILM', id: id}
}

export const addFilm = (film) => {
    return {type: 'ADD_FILM', film}
}