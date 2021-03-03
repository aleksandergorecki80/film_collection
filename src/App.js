import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import AddNewFilm from './components/AddNewFilm';
import ConfirmFilmData from './components/filmsFromOmdb/ConfirmFilmData';

import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FilmDetails from './components/FilmDetails';

const newHistory = createBrowserHistory();


const store = configureStore();


function App() {
  return (
    <div className="App">
      <BrowserRouter history={newHistory}>
        <Provider store={store}>
           <Navbar />
          <Route exact path="/" component={FilmList} />
          <Route path="/addNewFilm" component={AddNewFilm} />
          <Route path="/film/:id" component={FilmDetails} />
        </Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
