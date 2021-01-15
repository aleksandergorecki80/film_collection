import axios from "axios";
import FilmsList from './FilmsList';
import React, { useState } from "react";


const SearchForFilmData = () => {
    const [searchedPhrase, setSearchedPhrase] = useState('');
    const [moviesList, setMoviesList] = useState('');
    const [page, setPage] = useState(1);
 
    const onHandleChange = (event) => {
        setSearchedPhrase(event.target.value);
    }
    const searchMovie = (event) => {
        event.preventDefault();
        axios.get(`http://www.omdbapi.com/?s=${searchedPhrase}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then((res) => {
            const movies = res.data.Search;
            setMoviesList(movies);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    console.log(page);
    return ( 
        <div>
            Search in OMDb
            <form onSubmit={searchMovie}>
                <input type="text" placeholder="Search Movie" onChange={onHandleChange} />
                <input type="submit" value="Search" />
                <FilmsList moviesList={moviesList}/>
                {page>1 && <button onClick={()=>{setPage(page-1)}}>Previous</button>}
                {moviesList.length >=10 && <button onClick={()=>{setPage(page+1)}}>Next</button>}
            </form>
        </div>
     );
}
 
export default SearchForFilmData;