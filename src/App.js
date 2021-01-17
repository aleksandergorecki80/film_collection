import './App.css';
import FilmContextProvider from './contexts/FilmContext';
import ImportFilmDataContextProvider from "./contexts/ImportFilmDataContext";
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import AddNewFilm from './components/AddNewFilm';
import ConfirmFilmData from './components/filmsFromOmdb/ConfirmFilmData';

import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <FilmContextProvider>
        <HashRouter>
          <Navbar />
            <Switch>
              <ImportFilmDataContextProvider>
                <Route path="/addNewFilm">
                  <AddNewFilm />
                </Route>
                <Route path="/confirmData">
                  <ConfirmFilmData />
                </Route>
              </ImportFilmDataContextProvider>
              <Route path="/" strict>
                <FilmList />
              </Route>
            </Switch>
        </HashRouter>
      </FilmContextProvider>
    </div>
  );
}

export default App;
