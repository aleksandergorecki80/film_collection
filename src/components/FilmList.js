import React from 'react';
import Film from './Film';
import { connect } from 'react-redux';
import { fetchFilmsFromDB } from '../actions/filmActions';

export class FilmList extends React.Component {
  componentDidMount() {
    this.props.fetchFilmsFromDB();
  }
  componentDidUpdate() {
    localStorage.setItem('films', JSON.stringify(this.props.films));
  }
  render() {
    return this.props.films.length ? (
      <div className="films-list">

          {this.props.films.map((film) => {
            return <Film film={film} key={film._id} />;
          })}

      </div>
    ) : (
      <div className="empty">Nothing to display</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFilmsFromDB: () => {
      dispatch(fetchFilmsFromDB());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    films: state.films,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
