import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <h1>The collection of my films.</h1>
            <Link to="/">Home</Link>
            <Link to="/addNewFilm">Add new film</Link>
            <p>Currently there is (tu wstaw licznik) films in the library.</p>
            {/* <p>Currently there is { films.length } films in the library.</p> */}
        </div>
     );
}
 
export default Navbar;