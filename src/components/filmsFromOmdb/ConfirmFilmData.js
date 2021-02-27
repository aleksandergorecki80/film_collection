import React, { useContext, useState } from 'react';
// import { ImportFilmDataContext } from '../../contexts/ImportFilmDataContext';
// import { FilmContext } from '../../contexts/FilmContext';

const ConfirmFilmData = (props) => {
    const { importedFilmsData } = useContext(ImportFilmDataContext ? ImportFilmDataContext : '');
    const [title, setTitle] = useState(importedFilmsData.title ? importedFilmsData.title : '');
    const { dispatch } = useContext(FilmContext);

    const handleSubmit = (event) =>{
        console.log(title)
        event.preventDefault();
        dispatch({type: 'ADD_FILM', film: {
            title: title
        }})
    }
    return ( 
        <div>
            <p>confirm data</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(event)=>{setTitle(event.target.value)}}/>
                <input type="submit" value="Save" />
            </form>
        </div>
     );
}
 
export default ConfirmFilmData;