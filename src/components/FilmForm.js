import React from 'react';
import { connect } from 'react-redux';
import { addFilm } from '../actions/filmActions';
import { editFilm } from '../actions/filmActions';

class NewFilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      editMode: this.props.match.params.id ? true : false,
      film: {
        title: this.props.film ? this.props.film.title : '',
        format: this.props.film ? this.props.film.format : 'unknown',
        condition: this.props.film ? this.props.film.condition : '',
      }

    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.match.params.id) {
      this.props.editFilm(this.state.film, this.props.match.params.id);
    } else {
      this.props.addFilm(this.state.film);
    }
    this.props.history.push("/");
  };

  onChange = (event) => {
    this.setState({
      film: {
        ...this.state.film,
        [event.target.name]: event.target.value
      }
    })
  }

  componentDidMount() {
    if(this.props.match.params.id){
      const film = this.props.films.find((film) => {
        return film._id === this.props.match.params.id;
      });
      film ? 
        this.setState({
          film: {
            title: film.title,
            format: film.format,
            condition: film.condition
          }
        })
      : this.props.history.push("/");

    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Film title"
          value={this.state.film.title}

          onChange={this.onChange} name="title" required />

        <select value={this.state.film.format} onChange={this.onChange} name="format">
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
    addFilm: (film) => { dispatch(addFilm(film)) },
    editFilm: (film, id) => { dispatch(editFilm(film, id)) }
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