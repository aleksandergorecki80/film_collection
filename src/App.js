import logo from './logo.svg';
import './App.css';
import FilmContextProvider from './contexts/FilmContext';

function App() {
  return (
    <div className="App">
      <FilmContextProvider>
        
      </FilmContextProvider>
    </div>
  );
}

export default App;
