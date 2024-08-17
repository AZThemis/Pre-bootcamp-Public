import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Species() {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/species/${id}/`)
      .then(response => {
        setSpecies(response.data);
        setError(null);
      })
      .catch(() => {
        setSpecies(null);
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

  if (!species) return <p>Loading...</p>;

  return (
    <div className="result">
      <h2>{species.name}</h2>
      <p>Classification: {species.classification}</p>
      <p>Designation: {species.designation}</p>
      <p>Average Height: {species.average_height} cm</p>
      <p>Skin Colors: {species.skin_colors}</p>
    </div>
  );
}

export default Species;
