import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BackendTest = () => {
    const [filmsListFromDatabase, setFilmsListFromDatabase] = useState([]);
    useEffect(() => {
        axios.get('/api/movies')
            .then((res) => {
                console.log(res.data[0].title)
                console.log(typeof (res.data))
                setFilmsListFromDatabase(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

    
        if (filmsListFromDatabase) {
           return filmsListFromDatabase.map((film) =>{
                return (
                    <div key={film.date}>{film.title}</div>
                )
            })


        } else {
                return (
                    <div>Nothing to display</div>
                )
            }
    }

    export default BackendTest;