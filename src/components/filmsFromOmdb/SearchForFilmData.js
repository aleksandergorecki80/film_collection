import axios from "axios";
import FilmsList from './FilmsList';
import React, { useState, useEffect } from "react";


const SearchForFilmData = () => {
    const [searchedPhrase, setSearchedPhrase] = useState('');
    const [moviesList, setMoviesList] = useState('');
    const [page, setPage] = useState(1);
 
    const onHandleChange = (event) => {
        setSearchedPhrase(event.target.value);
    }
    const searchMovie = () => {
    // const searchMovie = (event) => {
        // event.preventDefault();
        axios.get(`http://www.omdbapi.com/?s=${searchedPhrase}&apikey=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then((res) => {
            const movies = res.data.Search;
            setMoviesList(movies);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const onNextPreviousPage = (value) =>{
        console.log(page);
        setPage(page+value);
        console.log(page);
        searchMovie();
        console.log(page);
    }

    useEffect(()=>{
        console.log('useEfect', page)
        // searchMovie();
    }, [page]);

    console.log(page, 'outside');
    return ( 
        <div>
            <p>Search in OMDb</p>
                <input type="text" placeholder="Search Movie" onChange={onHandleChange} />
                <input type="submit" value="Search" onClick={searchMovie}/>
                <FilmsList moviesList={moviesList}/>

                {/* {page>1 && <button onClick={()=>{setPage(page-1)}}>Previous</button>} */}
                {moviesList.length >=10 && <button onClick={()=>{onNextPreviousPage(1)}}>Next</button>}
        </div>
     );
}
 
export default SearchForFilmData;