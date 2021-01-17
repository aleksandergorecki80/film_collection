

export const importFilmDataReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_IMPORTED_FILM':
            return {
                    title: action.film.title
                }
            
        default: 
            return state
    }
}