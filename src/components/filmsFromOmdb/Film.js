import React from 'react';

const Film = ({ movie }) => {
    return ( 
        <li>
            <div>
                {`Id: ${movie.imdbID} - Title: ${movie.Title}`}
                {/* <img src={movie.Poster} /> */}
                <button>Add to my collection</button>
            </div>
        </li>
     );
}
 
export default Film;