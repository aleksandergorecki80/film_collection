import React from 'react';

const Film = ({ movie }) => {
    return ( 
        <li>
            <div>
                {`Id: ${movie.imdbID} - Title: ${movie.Title}`}
                {/* <img src={movie.Poster} /> */}
            </div>
        </li>
     );
}
 
export default Film;