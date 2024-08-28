import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await axios.get('http://localhost:8999/api/players');
      setPlayers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deletePlayer = async (id) => {
    if (window.confirm("Are you sure you want to delete this player?")) {
      try {
        await axios.delete(`http://localhost:8999/api/players/${id}`);
        setPlayers(players.filter(player => player._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <h2>Player List</h2>
      <Link to="/players/add">Add Player</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.position}</td>
              <td>
                <button onClick={() => deletePlayer(player._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
