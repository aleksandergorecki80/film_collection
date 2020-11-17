import React, { useContext } from 'react';
import { FilmContext } from '../contexts/FilmContext';

const Navbar = () => {
    const { films } = useContext(FilmContext);
    return ( 
        <div className='navbar'>
            <h1>The collection of my films.</h1>
            <p>Currently there is { films.length } films in the library.</p>
        </div>
     );
}
 
export default Navbar;