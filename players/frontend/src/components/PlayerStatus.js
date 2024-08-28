import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PlayerStatus = () => {
  const { gameId } = useParams(); // Get the game ID from the URL parameters
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, [gameId]); // Re-fetch players whenever gameId changes

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:8999/api/players');
      setPlayers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:8999/api/players/${id}/status`, { game: `game${gameId}`, status });
      fetchPlayers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Player Status - Game {gameId}</h2>
      <div>
        {/* Links to switch between games */}
        <button onClick={() => navigate('/status/game/1')}>Game 1</button>
        <button onClick={() => navigate('/status/game/2')}>Game 2</button>
        <button onClick={() => navigate('/status/game/3')}>Game 3</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>
                <button
                  style={{ backgroundColor: player.status[`game${gameId}`] === 'Playing' ? 'green' : '' }}
                  onClick={() => updateStatus(player._id, 'Playing')}
                >
                  Playing
                </button>
                <button
                  style={{ backgroundColor: player.status[`game${gameId}`] === 'Not Playing' ? 'red' : '' }}
                  onClick={() => updateStatus(player._id, 'Not Playing')}
                >
                  Not Playing
                </button>
                <button
                  style={{ backgroundColor: player.status[`game${gameId}`] === 'Undecided' ? 'yellow' : '' }}
                  onClick={() => updateStatus(player._id, 'Undecided')}
                >
                  Undecided
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatus;
