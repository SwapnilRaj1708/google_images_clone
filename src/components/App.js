import { useState } from 'react';
import Home from './Home';
import { DisplayContext } from '../contexts/DisplayContext';
import { SearchContext } from '../contexts/SearchContext';
import { ImagesContext } from '../contexts/ImagesContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [display, setDisplay] = useState(true)
  const [search, setSearch] = useState('')
  const [images, setImages] = useState({})

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <ImagesContext.Provider value={{ images, setImages }}>
          <div className="App">
            <Home />
          </div>
        </ImagesContext.Provider>
      </SearchContext.Provider>
    </DisplayContext.Provider>
  );
}

export default App;
