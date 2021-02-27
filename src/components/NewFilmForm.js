import React, { useContext, useState } from 'react';
// import { FilmContext } from '../contexts/FilmContext';

const NewFilmForm = () => {
    // const { dispatch } = useContext(FilmContext);
    const [ title, setTitle ] = useState('');
    const [ format, setFormat ] = useState('unknown');
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e)
      setTitle('');
      setFormat('unknown')
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Film title" value={title}
            onChange={(e) => {setTitle(e.target.value)}} required />
          <select value={format} onChange={(e) => {setFormat(e.target.value)}}>
            <option value={"unknown"} disabled required> -- select a format -- </option>
            <option value="DVD">DVD</option>
            <option value="BluRey">BluRey</option>
          </select>
            <input type="submit" value="Add film" />
        </form>
     );
}
 
export default NewFilmForm;