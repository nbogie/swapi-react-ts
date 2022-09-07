import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { People } from './People';
import { Planets } from './Planets';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/planets">Planets</Link>
        <Link to="/people">People</Link>
      </nav>
      <h1>SWAPI</h1>
      <Routes>
        <Route path="/planets" element={<Planets />} />
        <Route path="people" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;


