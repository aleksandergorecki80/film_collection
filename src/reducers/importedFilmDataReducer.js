const importedFilmDataReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_IMPORTED_FILM':
      return {
        title: action.film.Title,
        year: action.film.Year,
      };
    default:
      return state;
  }
};

export default importedFilmDataReducer;