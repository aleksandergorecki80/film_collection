import axios from 'axios';
import FilmsList from './FilmsList';
import React from 'react';

class SearchForFilmData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      moviesList: '',
      page: 1,
    };
  }
  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event && event.preventDefault();
    this.setState({
      page: 1,
    });
    this.state.title && this.fetchFromOmdb();
  };
  onNextPreviousPage = (value) => {
    this.setState((prevState) => {
      return { page: prevState.page + value };
    });
  };
  fetchFromOmdb = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.title}&apikey=${process.env.REACT_APP_API_KEY}&page=${this.state.page}`
      )
      .then((res) => {
        const movies = res.data.Search;
        this.setState({
          moviesList: movies,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidUpdate(prevProps, prevState) {
    this.state.page !== prevState.page && this.fetchFromOmdb();
  }
  render() {
    return (
      <div>
        <p>Search in OMDb</p>
        <form onSubmit={this.onSubmitHandler}>
          <input
            name="title"
            type="text"
            placeholder="Search Movie"
            onChange={this.onHandleChange}
          />
          <input type="submit" value="Search" />
        </form>
        {this.state.moviesList ? (
          <FilmsList moviesList={this.state.moviesList} />
        ) : (
          'nothing to display'
        )}
        {this.state.moviesList && this.state.page > 1 && (
          <button
            onClick={() => {
              this.onNextPreviousPage(-1);
            }}
          >
            Previous
          </button>
        )}
        {this.state.moviesList && this.state.moviesList.length >= 10 && (
          <button
            onClick={() => {
              this.onNextPreviousPage(1);
            }}
          >
            Next
          </button>
        )}
      </div>
    );
  }
}

export default SearchForFilmData;
