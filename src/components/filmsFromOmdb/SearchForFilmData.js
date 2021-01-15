import axios from "axios";
import FilmsList from './FilmsList';
import React, { useState, useEffect } from "react";


const SearchForFilmData = () => {

    const [tapedPhrase, setTaphedPhrase] = useState('');
    const [searchedPhrase, setSearchedPhrase] = useState('');
    const [moviesList, setMoviesList] = useState('');
    const [page, setPage] = useState(1);

    const onHandleChange = (event) => {
        setTaphedPhrase(event.target.value);
    }
    const searchMovie = () => {
        setSearchedPhrase(tapedPhrase);
    }
    const onNextPreviousPage = (value) => {
        setPage(page + value);
    }

    useEffect(() => {
        searchedPhrase &&
            axios.get(`http://www.omdbapi.com/?s=${searchedPhrase}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
                .then((res) => {
                    const movies = res.data.Search;
                    setMoviesList(movies);
                    console.log('get');
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [searchedPhrase, page]);
console.log(moviesList);
    return (
        <div>
            <p>Search in OMDb</p>
            <form onSubmit={searchMovie}>
                <input type="text" placeholder="Search Movie" onChange={onHandleChange} />
                <input type="submit" value="Search" />
                {moviesList ? <FilmsList moviesList={moviesList} /> : 'nothing to display'}
            </form>
            {page>1 && <button onClick={()=>{onNextPreviousPage(-1)}}>Previous</button>}
            {moviesList.length >=10 && <button onClick={()=>{onNextPreviousPage(1)}}>Next</button>}
        </div>
    );
}

export default SearchForFilmData;