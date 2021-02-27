import './App.css';
// import FilmContextProvider from './contexts/FilmContext';
// import ImportFilmDataContextProvider from "./contexts/ImportFilmDataContext";
// import Navbar from './components/Navbar';
// import FilmList from './components/FilmList';
import AddNewFilm from './components/AddNewFilm';
// import ConfirmFilmData from './components/filmsFromOmdb/ConfirmFilmData';

import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  // const location = useLocation();
  return (
    <div className="App">
          <HashRouter>
            {/* <BackendTest /> */}
            {/* <Navbar /> */}
              {/* <Switch> */}
                
                  {/* <Route path="/addNewFilm"> */}
                    {/* <AddNewFilm /> */}
                  {/* </Route> */}
                  {/* <Route path="/confirmData"> */}
                    {/* <ConfirmFilmData /> */}
                  {/* </Route> */}
                
                {/* <Route path="/" strict> */}
                  {/* <FilmList /> */}
                {/* </Route> */}
              {/* </Switch> */}
              <AddNewFilm />
          </HashRouter>
           
    </div>
  );
}

export default App;
