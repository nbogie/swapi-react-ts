import { Link, Route, Routes } from "react-router-dom";
import './App.css';
import { People } from './People';
import { PersonBigView } from './PersonBigView';
import { PlanetBigView } from './PlanetBigView';
import { Planets } from './Planets';

function App() {
  console.log("App re-renders")
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/planets">Planets</Link>
          <Link to="/people">People</Link>
        </nav>
        <h1>SWAPI</h1>
      </header>
      <Routes>
        <Route path="/planets" element={<Planets />} />
        <Route path="/people" element={<People />} />
        <Route path="/planet/:id" element={<PlanetBigView />} />
        <Route path="/person/:id" element={<PersonBigView />} />
      </Routes>
      <footer>
        Data from <a href="https://swapi.dev/">https://swapi.dev/</a>
      </footer>
    </div>
  );
}

export default App;

