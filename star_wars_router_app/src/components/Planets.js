import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Planets() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${id}/`)
      .then(response => {
        setPlanet(response.data);
        setError(null);
      })
      .catch(() => {
        setPlanet(null);
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

  if (!planet) return <p>Loading...</p>;

  return (
    <div className="result">
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Surface Water: {planet.surface_water ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default Planets;
