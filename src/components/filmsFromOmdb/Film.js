import React, { useContext} from 'react';
import { Link } from 'react-router-dom';


const Film = ({ movie }) => {

    const onClickHandle = () => {
        console.log(movie.Title);

    }
    return ( 
        <li>
            <div>
                {`Id: ${movie.imdbID} - Title: ${movie.Title}`}
                {/* <img src={movie.Poster} /> */}
                <Link to="/confirmData">
                    <button onClick={onClickHandle}>Add to my collection</button>
                </Link>
            </div>
        </li>
     );
}
 
export default Film;