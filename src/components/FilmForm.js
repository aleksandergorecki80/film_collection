import React from 'react';
import { connect } from 'react-redux';
import { addFilm } from '../actions/filmActions';
import { editFilm } from '../actions/filmActions';
import DatePicker from './DatePicker';
import { eachYearOfInterval } from 'date-fns';
import axios from 'axios';

class FilmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posterFile: '',
      openPicker: false,
      pickerDatesArray: [],
      errorMessage: '',
      film: {
        title: this.props.film ? this.props.film.title : '',
        format: this.props.film ? this.props.film.format : 'unknown',
        condition: this.props.film ? this.props.film.condition : '',
        year: this.props.film ? this.props.film.year : '',
        posterName: this.props.film ? this.props.film.posterName : '',
      },
      validateErrors: {
        titleError: ''
      }
    };
  };

// VALIDATION PATTERNS
validateTitle = (title) => {
  const reg = /^[\s0-9a-z?!-]{2,255}$/i;
  return reg.test(title);
}


  handleSubmit = (event) => {
    event.preventDefault();
    // VALIDATION
    if(!this.validateTitle(this.state.film.title)){
      return this.setState({
        validateErrors: {
          ...this.state.validateErrors,
          titleError: 'Wrong title format'
        }
      })
    }
    //
    if (this.props.match.params.id) {
      this.props.editFilm(this.state.film, this.props.match.params.id);
      this.props.history.push('/');
    } else {
      this.props.addFilm(this.state.film);
      this.props.history.push('/');
    }
  };



  onChange = (event) => {
    this.setState({
      film: {
        ...this.state.film,
        [event.target.name]: event.target.value,
      },
    });
  };

  openPickerHandler = () => {
    const interval = {
      start: new Date(process.env.REACT_APP_DATE_START),
      end: new Date(),
    };
    const datesArray = eachYearOfInterval(interval);
    this.setState({
      openPicker: true,
      pickerDatesArray: datesArray.reverse(),
    });
  };

  closePickerFunction = (event) => {
    if(event.keyCode === 27){
      this.setState({
        openPicker: false
      })
    }
  }

  setPickedYear = (event) => {
    this.setState({
      openPicker: false,
      film: {
        ...this.state.film,
        year: event.target.innerText,
      },
    });
  };

  onHanleFile = (event) => {
    const formData = new FormData();  
    formData.append('posterFile', event.target.files[0]);
    axios.post('/api/movies/upload', formData)
    .then((res) => {
      console.log(res)
      this.setState({
        errorMessage: '',
        film: {
          ...this.state.film,
        posterName: res.data.filename
      }
      })
    })
    .catch((err) => {
      console.log(err.message)
      console.log(err.response.data.message);
      this.setState({
        errorMessage: err.response.data.message
      })
    })
  };

  componentDidMount() {
    // EDITION OF EGZISTING FILM
    if (this.props.match.params.id) {
      const film = this.props.films.find((film) => {
        return film._id === this.props.match.params.id;
      });
      film
        ? this.setState({
            film: {
              title: film.title,
              format: film.format,
              condition: film.condition,
              year: film.year,
              posterName: film.posterName,
            },
          })
        : this.props.history.push('/');
    }
    // CONFIRMING DATA OF FILM IMPORTED FROM OMDB API
    if (this.props.match.path === '/confirm_data') {
      this.setState({
        film: {
          ...this.state.film,
          title: this.props.importedData.title,
          year: this.props.importedData.year,
          posterName: this.props.importedData.posterName,
        },
      });
    }

    // LISTENING FOR ESC 
    document.addEventListener("keydown", this.closePickerFunction, false);
  }

  render() {
    console.log(this.state.validateErrors.titleError)
    const displayPoster = () =>{
      return (!this.state.film.posterName.startsWith('https://') ? (
              <img src={`/uploads/${this.state.film.posterName}`} alt="cover" />
            ) : (
              <img src={this.state.film.posterName} alt="cover" />
            ))
    }
    return (
      <div className="content add-and-edit">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Film title"
            value={this.state.film.title}
            onChange={this.onChange}
            name="title"
            required
          />
          {this.state.validateErrors.titleError && <p className="validate-error">{this.state.validateErrors.titleError}</p>}
          <div>
            <input
              type="text"
              placeholder="Year"
              value={this.state.film.year}
              onChange={this.onChange}
              name="year"
              onClick={this.openPickerHandler}
            />

            {this.state.openPicker && (
              <DatePicker
                setPickedYear={this.setPickedYear}
                defaultYear={this.state.film.year}
                pickerDatesArray={this.state.pickerDatesArray}
                numberOfDatesOnOneSlide={25}
              />
            )}
          </div>
          <select
            value={this.state.film.format}
            onChange={this.onChange}
            name="format"
          >
            <option value="unknown" disabled required>
              {' '}
              -- select a format --{' '}
            </option>
            <option value="DVD">DVD</option>
            <option value="BluRey">BluRey</option>
          </select>
          <div className="radio-group">
              <input
                id="new"
                name="condition"
                type="radio"
                value="New"
                checked={this.state.film.condition === 'New'}
                onChange={this.onChange}
              />
              <label htmlFor="new">New</label>
              <input
                id="used"
                name="condition"
                type="radio"
                value="Used"
                checked={this.state.film.condition === 'Used'}
                onChange={this.onChange}
              />
              <label htmlFor="used">Used</label>
          </div>
          <div className="poster">
            <input type="file" onChange={this.onHanleFile} id="upload-poster"/>
            <label htmlFor="upload-poster" className="">Upload file</label>
          </div>
          <div className="img-column">
           {this.state.film.posterName && displayPoster()}
           {this.state.errorMessage && <span className="error-message">{this.state.errorMessage}</span>}
        </div>
          {!this.props.match.params.id ? (
            <input type="submit" value="Save film" className="btn btn-add" />
          ) : (
            <input type="submit" value="Update film" className="btn btn-add" />
          )}
        </form>
       </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFilm: (film, formData) => {
      dispatch(addFilm(film, formData));
    },
    editFilm: (film, id) => {
      dispatch(editFilm(film, id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    films: state.films,
    importedData: state.importedData,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmForm);
