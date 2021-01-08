import './App.css';
import FilmContextProvider from './contexts/FilmContext';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import NewFilmForm from './components/NewFilmForm';

import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  // const location = useLocation();
  return (
    <div className="App">
      <FilmContextProvider>
        <HashRouter>
          <Navbar />
            <Switch>
            <Route path="/addNewFilm">
                <NewFilmForm />
              </Route>
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
