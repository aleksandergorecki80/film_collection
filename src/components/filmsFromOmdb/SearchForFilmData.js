import axios from "axios";
import FilmsList from './FilmsList';
import React, { useState } from "react";


const SearchForFilmData = () => {

    const [tapedPhrase, setTaphedPhrase] = useState('');
    // const [searchedPhrase, setSearchedPhrase] = useState('');
    const [moviesList, setMoviesList] = useState('');
    const [page, setPage] = useState(1);

    const onHandleChange = (event) => {
        console.log(event.target.value)
        setTaphedPhrase(event.target.value);
    }
    const searchMovie = (e) => {
        e.preventDefault();
        console.log(tapedPhrase)
        tapedPhrase &&
                axios.get(`http://www.omdbapi.com/?s=${tapedPhrase}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
                    .then((res) => {
                        const movies = res.data.Search;
                        console.log(movies)
                        setMoviesList(movies);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
// tu


        // setSearchedPhrase(tapedPhrase);
    }
    const onNextPreviousPage = (value) => {
        setPage(page + value);
    }
console.log(moviesList);
    return (
        <div>
            <p>Search in OMDb</p>
            <form onSubmit={searchMovie}>
                <input type="text" placeholder="Search Movie" onChange={onHandleChange} />
                <input type="submit" value="Search" />
                
            </form>
            { moviesList ? 
            <FilmsList moviesList={moviesList} /> 
            : 'nothing to display'}
            {(moviesList && page>1) && <button onClick={()=>{onNextPreviousPage(-1)}}>Previous</button>}
            {(moviesList && moviesList.length >=10) && <button onClick={()=>{onNextPreviousPage(1)}}>Next</button>}
        </div>
    );
}

export default SearchForFilmData;