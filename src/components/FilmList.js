import React from 'react';
import FilmDetails from './FilmDetails';
import { connect } from 'react-redux';

const FilmList = (props) => {
    return props.films.length ? ( 
        <div className="film-list">
            <ul>
                { props.films.map((film)=>{
                    return (
                        // <FilmDetails film={film} key={film._id} />
                        <FilmDetails film={film} key={film._id} />
                    )
                }) }
            </ul>
        </div>
     ) : (
         <div className="empty">Nothing to display</div>
     );
}
 
const mapStateToProps = (state) => {
    return {
        films: state.films
    }
}
export default connect(mapStateToProps)(FilmList)