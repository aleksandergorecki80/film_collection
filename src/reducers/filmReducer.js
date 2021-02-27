// import { v4 as uuidv4 } from 'uuid';

const mockState = [
{Title: "We Need to Talk About Kevin", Year: "2011", imdbID: "tt1242460", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SX300.jpg"},
{Title: "Kevin & Perry Go Large", Year: "2000", imdbID: "tt0205177", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZDNhZDNhNm…jJhMjMxXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},
{Title: "Kevin Can Wait", Year: "2016–2018", imdbID: "tt5462720", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BOTM3MGUwNT…DY3YTM1XkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg"},
{Title: "Kevin Hart: Let Me Explain", Year: "2013", imdbID: "tt2609912", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTg4MjM2MjAxOF5BMl5BanBnXkFtZTcwMTAzOTEyOQ@@._V1_SX300.jpg"},
{Title: "An Evening with Kevin Smith", Year: "2002", imdbID: "tt0346952", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNWE2MDkzNz…GQ4MmExXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
{Title: "Kevin Hart: Laugh at My Pain", Year: "2011", imdbID: "tt1999192", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjI4NjA5NTI0OV5BMl5BanBnXkFtZTcwMTU0MzI1Ng@@._V1_SX300.jpg"},
{Title: "Kevin Hart: Seriously Funny", Year: "2010", imdbID: "tt1714196", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTcxNTI2OTA4Ml5BMl5BanBnXkFtZTcwMDA1MjE5NA@@._V1_SX300.jpg"},
{Title: "Kevin (Probably) Saves the World", Year: "2017–2018", imdbID: "tt6474174", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BMjIyNjU4OTk3Nl5BMl5BanBnXkFtZTgwNjgxMDkyMzI@._V1_SX300.jpg"},
{Title: "Kevin Hart: I'm a Grown Little Man", Year: "2009", imdbID: "tt1420554", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZThmMjc5OG…mJjM2FiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
{Title: "Kevin Hart: Irresponsible", Year: "2019", imdbID: "tt10009796", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNjg5OTIxMG…TAzMWNlXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"}
]

const filmReducer = (state = mockState, action) => {
    switch(action.type) {
        // case 'LOAD_FILMS':
        //     return action.film
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

export default filmReducer;