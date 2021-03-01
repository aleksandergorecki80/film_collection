import React from 'react';
import { connect } from 'react-redux';
import { addFilm } from '../actions/filmActions';
import { editFilm } from '../actions/filmActions';

class NewFilmForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editMode: this.props.film ? true : false,
      title: this.props.film ? this.props.film.title : '',
      format: this.props.film ? this.props.film.format : 'unknown',
      condition: this.props.film ? this.props.film.condition : '',
      _id: this.props.film ? this.props.film._id : '',
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    if(this.state.editMode)
    {
      this.props.dispatch(editFilm(this.state));
      this.props.onCloseEditMode();
    } else {
      this.props.dispatch(addFilm(this.state));
    }
  };

  onChange = (event) => {
    console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value})
}

  
   render(){
    console.log(this.props)
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
 
export default connect()(NewFilmForm);


// title: action.film.title,
// format: action.film.format,
// poster: action.film.poster,
// description: action.film.description,
// year: action.film.year,
// genere: action.film.genere,
// date: action.film.date,
// isInCollection: action.film.isInCollection,
// condition: action.film.condition,