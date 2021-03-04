import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import AddNewFilm from './components/AddNewFilm';
import ConfirmFilmData from './components/filmsFromOmdb/ConfirmFilmData';
import  BackendTest  from "./components/BackendTest";
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FilmDetails from './components/FilmDetails';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const newHistory = createBrowserHistory();


const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter history={newHistory}>

        <Navbar />
        <BackendTest />
        <Route exact path="/" component={FilmList} />
        <Route path="/addNewFilm" component={AddNewFilm} />
        <Route path="/film/:id" component={FilmDetails} />

      </BrowserRouter>
      </Provider>

    </div >
  );
}

export default App;
