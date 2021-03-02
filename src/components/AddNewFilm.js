import React, { useState } from "react";
import SearchForFilmData from "./filmsFromOmdb/SearchForFilmData";
import FilmForm from "./FilmForm";


const AddNewFilm = (props) => {
    const [addingMethod, setAddingMethod ] = useState('search');
    return ( 
        <div>
            <form>
                <label>
                    <input type="radio" 
                        name="adding-method"
                        value="search" 
                        onChange={(e)=>{setAddingMethod(e.target.value)}}
                        checked = { addingMethod === "search" }
                    />
                    <span>Serach in OMDb</span>
                </label>
                <label>
                <input type="radio" 
                    name="adding-method"
                    value="form"
                    onChange={(e)=>{setAddingMethod(e.target.value)}}
                    checked = { addingMethod === "form" }
                />
                <span>Add data manually</span>
                </label>
            </form>

                {addingMethod === "search" ? <SearchForFilmData /> :  <FilmForm {...props}/>}

        </div>
     );
}
 
export default AddNewFilm;