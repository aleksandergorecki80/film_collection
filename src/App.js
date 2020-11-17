import logo from './logo.svg';
import './App.css';
import FilmContextProvider from './contexts/FilmContext';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';

function App() {
  return (
    <div className="App">
      <FilmContextProvider>
        <Navbar />
        <FilmList />
      </FilmContextProvider>
    </div>
  );
}

export default App;
