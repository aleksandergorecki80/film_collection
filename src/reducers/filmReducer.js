import { v4 as uuidv4 } from 'uuid';

const defaultState = [];


const filmReducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOAD_FILMS':
            return action.films
          
        case 'ADD_FILM':
            return [...state, {
                title: action.film.title,
                format: action.film.format,
                poster: action.film.poster,
                description: action.film.description,
                year: action.film.year,
                genere: action.film.genere,
                date: action.film.date,
                isInCollection: action.film.isInCollection,
                condition: action.film.condition,
                _id: uuidv4()
            }];
        case 'REMOVE_FILM':
            return state.filter((film) => {
                return film._id !== action._id
            });
        case 'EDIT_FILM':
            
            return state.map((film) => {
                if(film._id === action.film._id){
                    return {
                        title: action.film.title,
                        format: action.film.format,
                        poster: action.film.poster,
                        description: action.film.description,
                        year: action.film.year,
                        genere: action.film.genere,
                        date: action.film.date,
                        isInCollection: action.film.isInCollection,
                        condition: action.film.condition,
                        _id: action.film._id
                    }} else {
                        return film
                    }
            })
        default:
            return state
    }
}

export default filmReducer;