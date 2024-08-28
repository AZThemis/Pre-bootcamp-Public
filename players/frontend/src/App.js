import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/players/list">Manage Players</NavLink>
          <NavLink to="/status/game/1">Manage Player Status</NavLink>
        </nav>
        <Routes>
          <Route path="/players/list" element={<PlayerList />} />
          <Route path="/players/add" element={<AddPlayer />} />
          <Route path="/status/game/:gameId" element={<PlayerStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
