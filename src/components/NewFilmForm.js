import React from 'react';
import { connect } from 'react-redux';
// import { FilmContext } from '../contexts/FilmContext';
import { addFilm } from '../actions/filmActions';

class NewFilmForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      format: '',
      condition: ''
    }
  }

 

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.dispatch(addFilm(this.state));
  };
  onSetTitle = (event) => {
    console.log(this.state)
    this.setState({
      title: event.target.value
    })
  }
  onSetFormat =(event)=> {
    this.setState({
      format: event.target.value
    })
  }
  onSetIsInCollection = (event) =>{
    this.setState({
      isInCollection: event.target.value
    });
  }
  onSetCondition = (event) =>{
    this.setState({
      condition: event.target.value
    });
  }
   render(){
    console.log(this.state)
    return ( 
      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Film title" value={this.title}
          onChange={this.onSetTitle} required />
        <select value={this.format} onChange={this.onSetFormat}>
          <option value={"unknown"} disabled required> -- select a format -- </option>
          <option value="DVD">DVD</option>
          <option value="BluRey">BluRey</option>
        </select>
        <textarea></textarea>
        <div onChange={this.onSetCondition}>
          <input type="radio" value="new" name="condition" /> New
          <input type="radio" value="used" name="condition" /> Used

        </div>
        {/* <select value={this.isInCollection} onChange={this.onSetCondition}>
          <option value={"unknown"} disabled required> -- select  -- </option>
          <option value={'new'}>New</option>
          <option value={'used'}>Used</option>
        </select> */}

        <input type="submit" value="Add film" />
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