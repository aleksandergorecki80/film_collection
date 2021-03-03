import React from 'react';
import { connect } from 'react-redux';
import { addFilm } from '../actions/filmActions';
import { editFilm } from '../actions/filmActions';

class NewFilmForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      editMode: this.props.film ? true : false,
      title: this.props.film ? this.props.film.title : '',
      format: this.props.film ? this.props.film.format : 'unknown',
      condition: this.props.film ? this.props.film.condition : '',
      _id: this.props.film ? this.props.film._id : '',
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.editMode)
    {
      this.props.editFilm(this.state);
      this.props.onCloseEditMode();
    } else {
      this.props.addFilm(this.state);
    }
  };

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
}

componentDidUpdate (prevProps, prevState){
  if (prevProps.films.length !== this.props.films.length) {
    this.props.history.push("/");
  }
}
   render(){
    return ( 
      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Film title" 
          value={this.state.title}
          
          onChange={this.onChange} name="title" required />

        <select value={this.state.format} onChange={this.onChange} name="format">
          <option value="unknown" disabled required> -- select a format -- </option>
          <option value="DVD">DVD</option>
          <option value="BluRey">BluRey</option>
        </select>
        <textarea></textarea>

        <div className="radio">
          <label>
            <input
            name="condition"
              type="radio"
              value="New"
              checked={this.state.condition === "New"}
              onChange={this.onChange}
            />
            New
          </label>
        </div>
        <div className="radio">
          <label>
            <input
            name="condition"
              type="radio"
              value="Used"
              checked={this.state.condition === "Used"}
              onChange={this.onChange}
            />
            Used
          </label>
        </div>
         {!this.props.film ? 
            <input type="submit" value="Add film" /> :
            <input type="submit" value="Update film" />
          }
      </form>
   );
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFilm: (film) => { dispatch(addFilm(film)) },
    editFilm: (film) => { dispatch(editFilm(film))}
  }
};
 
const mapStateToProps = (state) => {
  return {
    films: state.films
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(NewFilmForm);


// title: action.film.title,
// format: action.film.format,
// poster: action.film.poster,
// description: action.film.description,
// year: action.film.year,
// genere: action.film.genere,
// date: action.film.date,
// isInCollection: action.film.isInCollection,
// condition: action.film.condition,