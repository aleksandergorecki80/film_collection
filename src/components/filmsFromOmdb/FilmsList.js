import { React } from 'react';
import Film from './Film';
import ConfirmFilmData from './ConfirmFilmData';
import { connect } from 'react-redux';



const FilmsList = (props) => {
  console.log(props.importedData)
  return props.moviesList.length ? (
    <div>
      <ul>
        {props.moviesList.map((movie) => {
          return <Film movie={movie} key={movie.imdbID} />;
        })}
      </ul>
      {

    }
      {props.importedData && <ConfirmFilmData importedData={props.importedData}/>}
        
    </div>
  ) : (
    <div>Nothing to display</div>
  );
};



const mapStateToProps = (state) => {
  return {
    importedData: state.importedData,
  };
};

export default connect(mapStateToProps)(FilmsList);
