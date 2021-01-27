// import { v4 as uuidv4 } from 'uuid';

export const filmReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_FILMS':
            return action.film
        case 'ADD_FILM':
            return [...state, {
                title: action.film.title,
                format: action.film.format,
                // id: uuidv4()
            }];
        case 'REMOVE_FILM':
            return state.filter((film) => {
                return film._id !== action.id
            });
        default:
            return state
    }
}