import React, { useEffect } from 'react';

import FilmDetails from './FilmDetails';
import axios from 'axios';

import { connect } from 'react-redux';

const FilmList = (props) => {
    console.log(props)
    // return (<div>kki</div>)
    return props.films.length ? ( 
        <div className="film-list">
            <ul>
                { props.films.map((film)=>{
                    return (
                        // <FilmDetails film={film} key={film._id} />
                        <FilmDetails film={film} key={film.imdbID} />
                    )
                }) }
            </ul>
        </div>
     ) : (
         <div className="empty">Nothing to display</div>
     );
    

    // const { dispatch } = useContext(FilmContext);
    // useEffect(() => {
    //     axios.get('/api/movies')
    //         .then((res) => {
    //             dispatch({type: 'LOAD_FILMS', film: res.data});
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, []);
    // const { films } = useContext(FilmContext);
    // console.log(films)
    // return films.length ? ( 
    //     <div className="film-list">
    //         <ul>
    //             { films.map((film)=>{
    //                 return (
    //                     <FilmDetails film={film} key={film._id} />
    //                 )
    //             }) }
    //         </ul>
    //     </div>
    //  ) : (
    //      <div className="empty">Nothing to display</div>
    //  );
}
 
// export default FilmList;
const mapStateToProps = (state) => {
    return {
        films: state.films
    }
}
export default connect(mapStateToProps)(FilmList)