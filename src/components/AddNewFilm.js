import React, { useState } from "react";
import SearchForFilmData from "./filmsFromOmdb/SearchForFilmData";
import NewFilmForm from "./NewFilmForm";
import ImportFilmDataContextProvider from "../contexts/ImportFilmDataContext";

const AddNewFilm = () => {
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
            <ImportFilmDataContextProvider>
                {addingMethod === "search" ? <SearchForFilmData /> :  <NewFilmForm />}
            </ImportFilmDataContextProvider>
        </div>
     );
}
 
export default AddNewFilm;