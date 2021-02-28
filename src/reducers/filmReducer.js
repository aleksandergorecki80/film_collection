import { v4 as uuidv4 } from 'uuid';

const mockState = [
    {title: "Rambo", format: "BluRey", condition: "used", _id:'001'},
    {title: "Rambo 2", format: "DVD", condition: "new", _id:'002'},
    {title: "Terminator", format: "BluRey", condition: "used", _id:'003'},
    {title: "Terminator 2", format: "DVD", condition: "new", _id:'004'},
    {title: "Szklana pułapka", format: "BluRey", condition: "used", _id:'005'},
    {title: "Szklana pułapka 2", format: "DVD", condition: "new", _id:'006'},

];


const filmReducer = (state = mockState, action) => {
    switch(action.type) {
        // case 'LOAD_FILMS':
        //     return action.film
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
                return film._id !== action.id
            });
        default:
            return state
    }
}

export default filmReducer;