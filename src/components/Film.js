import { React } from 'react';
import { Link } from 'react-router-dom';

const Film = (props) => {
  return (
    <li>
      <div className="title">
        <Link to={`/film/${props.film._id}`}>
          {props.film.title} - {props.film.format} - {props.film.condition}
        </Link>
      </div>
    </li>
  );
};

export default Film;
