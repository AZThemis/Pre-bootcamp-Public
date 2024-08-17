import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import './App.css';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
function App() {
  const [resource, setResource] = useState('people');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (id) {
      navigate(`/${resource}/${id}`);
    }
  };

  return (
    <div className="App">
      <div className="search-box">
        <label htmlFor="resource">Search for: </label>
        <select id="resource" value={resource} onChange={(e) => setResource(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="vehicles">Vehicles</option>
          <option value="species">Species</option>
        </select>
        <label htmlFor="id"> ID: </label>
        <input
          type="number"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="/starships/:id" element={<Starships />} />
        <Route path="/vehicles/:id" element={<Vehicles />} />
        <Route path="/species/:id" element={<Species />} />
      </Routes>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
