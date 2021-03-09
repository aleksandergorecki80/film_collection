import React from 'react';
import { connect } from 'react-redux';
import { addFilm } from '../actions/filmActions';
import { editFilm } from '../actions/filmActions';

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formData: new FormData(),
      film: {
        title: this.props.film ? this.props.film.title : '',
        format: this.props.film ? this.props.film.format : 'unknown',
        condition: this.props.film ? this.props.film.condition : '',
        year: this.props.film ? this.props.film.year : '',
        posterName: this.props.film ? this.props.film.poster : '',
        posterFile: '',
      }

    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.match.params.id) {
      this.props.editFilm(this.state.film, this.props.match.params.id);
      this.props.history.push("/");
    } else {
      this.props.addFilm(this.state.film);
      this.props.history.push("/");
    }
    
  };

  onChange = (event) => {
    this.setState({
      film: {
        ...this.state.film,
        [event.target.name]: event.target.value
      }
    })
  }

  onHanleFile = (event) => {
    this.setState({
      film: {
        ...this.state.film,
      posterFile: event.target.files[0],
      posterName: event.target.files[0].name
    }
    })
  }

  componentDidMount() {
    // EDITION OF EGZISTING FILM
    if(this.props.match.params.id){
      const film = this.props.films.find((film) => {
        return film._id === this.props.match.params.id;
      });
      film ? 
        this.setState({
          film: {
            title: film.title,
            format: film.format,
            condition: film.condition,
            year: film.year,
            poster: film.poster
          }
        })
      : this.props.history.push("/");
    }
    // CONFIRMING DATA OF FILM IMPORTED FROM OMDB API
    if(this.props.match.path === '/confirm_data'){
      this.setState({
        film: {
          ...this.state.film,
          title: this.props.importedData.title,
          year: this.props.importedData.year,
          poster: this.props.importedData.poster
        }
      })
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Film title"
          value={this.state.film.title}
          onChange={this.onChange} 
          name="title" 
          required 
        />
        <input type="text" placeholder="Year"
          value={this.state.film.year}
          onChange={this.onChange} 
          name="year"  
        />
        <select value={this.state.film.format} onChange={this.onChange} name="format">
          <option value="unknown" disabled required> -- select a format -- </option>
          <option value="DVD">DVD</option>
          <option value="BluRey">BluRey</option>
        </select>
        <div className="radio">
          <label>
            <input
              name="condition"
              type="radio"
              value="New"
              checked={this.state.film.condition === "New"}
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
              checked={this.state.film.condition === "Used"}
              onChange={this.onChange}
            />
            Used
          </label>
        </div>
        <div>
          <input type="file" onChange={this.onHanleFile} />
          <label></label>
        </div>
        {!this.props.match.params.id ?
          <input type="submit" value="Add film" /> :
          <input type="submit" value="Update film" />
        }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFilm: (film, formData) => { dispatch(addFilm(film, formData)) },
    editFilm: (film, id) => { dispatch(editFilm(film, id)) }
  }
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    importedData: state.importedData
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmForm);


// title: action.film.title,
// format: action.film.format,
// poster: action.film.poster,
// description: action.film.description,
// year: action.film.year,
// genere: action.film.genere,
// date: action.film.date,
// isInCollection: action.film.isInCollection,
// condition: action.film.condition,