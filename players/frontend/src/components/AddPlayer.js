import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPlayer = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.length < 2) {
      setErrors(['Name must be at least 2 characters long']);
      return;
    }

    try {
      await axios.post('http://localhost:8999/api/players', { name, position });
      navigate('/players/list');
    } catch (err) {
      console.error(err);
      setErrors(['Failed to add player.']);
    }
  };

  return (
    <div>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        {errors.map((error, index) => (
          <p key={index} style={{ color: 'red' }}>{error}</p>
        ))}
        <div>
          <label>Player Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Preferred Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPlayer;
