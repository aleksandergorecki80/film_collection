// import './App.css';
import React , { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import Modal from './components/Modal';
import Header from './components/Header';
import FilmList from './components/FilmList';
import SearchForFilmData from './components/filmsFromOmdb/SearchForFilmData';
import FilmForm from './components/FilmForm';
import Register from './components/Register';
import Login from './components/Login';
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

const App = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  
  return (
    <div className="App container">
      <Provider store={store}>
      
      <Router history={newHistory}>
        {showModal && <Modal setShowModal={setShowModal}/>}
        {showHeader && <Header showModal={showModal} setShowModal={setShowModal} />}
        <Route exact path="/" component={FilmList} />
        <Route path="/search_film" component={SearchForFilmData} />
        <Route path="/add_film" component={FilmForm} />
        <Route path="/film/:id" component={FilmDetails} />
        <Route path="/edit_film/:id" component={FilmForm} />
        <Route path="/confirm_data" component={FilmForm} />
        <Route path="/register" component={()=> <Register setShowHeader={setShowHeader} />} />
        {/* <Route path="/login" component={Login} setShowHeader={setShowHeader}/> */}
        <Route path="/login" component={()=><Login setShowHeader={setShowHeader} showHeader={showHeader}/>} />
      </Router>
      </Provider>

    </div >
  );
}

export default App;
