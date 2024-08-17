import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Starships() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then(response => {
        setStarship(response.data);
        setError(null);
      })
      .catch(() => {
        setStarship(null);
        setError("These arent the droids youre looking for");
      });
  }, [id]);

  if (error) {
    return (
      <div className="error">
        <img src="https://starwarsblog.starwars.com/wp-content/uploads/2021/05/Obi-Wan_Kenobi.png" alt="Obi-Wan Kenobi" />
        <p>{error}</p>
      </div>
    );
  }

  if (!starship) return <p>Loading...</p>;

  return (
    <div className="result">
      <h2>{starship.name}</h2>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost in Credits: {starship.cost_in_credits}</p>
      <p>Starship Class: {starship.starship_class}</p>
    </div>
  );
}

export default Starships;
