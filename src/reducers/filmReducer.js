import { v4 as uuidv4 } from 'uuid';

export const filmReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_FILM':
            return [...state, {
                title: action.film.title,
                format: action.film.format,
                id: uuidv4()
            }];
        case 'REMOVE_FILM':
            return state.filter((film) => {
                return film.id !== action.id
            });
        default:
            return state
    }
}