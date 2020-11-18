import logo from './logo.svg';
import './App.css';
import FilmContextProvider from './contexts/FilmContext';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import NewFilmForm from './components/NewFilmForm';

function App() {
  return (
    <div className="App">
      <FilmContextProvider>
        <Navbar />
        <FilmList />
        <NewFilmForm />
      </FilmContextProvider>
    </div>
  );
}

export default App;
