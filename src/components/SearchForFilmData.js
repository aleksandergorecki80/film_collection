import axios from "axios";
import React, { useState } from "react";


const SearchForFilmData = () => {
    const [searchedPhrase, setSearchedPhrase] = useState('');

    const onHandleChange = (event) => {
        setSearchedPhrase(event.target.value);
    }
    const searchMovie = (event) => {
        event.preventDefault();
        console.log(searchedPhrase);
        axios.get(`http://www.omdbapi.com/?s=${searchedPhrase}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
            const movies = res.data.Search;
            console.log(movies);
            //  TU SKOŃCZYŁEM ZASTAMÓW SIĘ CO DALEJ
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
    return ( 
        <div>
            Search in OMDb
            <form onSubmit={searchMovie}>
                <input type="text" placeholder="Search Movie" onChange={onHandleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
     );
}
 
export default SearchForFilmData;