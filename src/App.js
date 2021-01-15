import './App.css';
import FilmContextProvider from './contexts/FilmContext';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import AddNewFilm from './components/AddNewFilm';

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
                <AddNewFilm />
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
