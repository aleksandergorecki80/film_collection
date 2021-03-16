// import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import AddNewFilm from './components/AddNewFilm';
import FilmForm from './components/FilmForm';
import { Router, Route } from 'react-router-dom';
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
      <Router history={newHistory}>
        <Navbar />
        <Route exact path="/" component={FilmList} />
        <Route path="/add_film" component={AddNewFilm} />
        <Route path="/film/:id" component={FilmDetails} />
        <Route path="/edit_film/:id" component={FilmForm} />
        <Route path="/confirm_data" component={FilmForm} />
      </Router>
      </Provider>

    </div >
  );
}

export default App;
