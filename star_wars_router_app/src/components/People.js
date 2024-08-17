import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function People() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${id}/`)
      .then(response => {
        setPerson(response.data);
        setError(null);
      })
      .catch(() => {
        setPerson(null);
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

  if (!person) return <p>Loading...</p>;

  return (
    <div className="result">
      <h2>{person.name}</h2>
      <p>Height: {person.height} cm</p>
      <p>Mass: {person.mass} kg</p>
      <p>Hair Color: {person.hair_color}</p>
      <p>Skin Color: {person.skin_color}</p>
      {person.homeworld && (
        <p>
          Homeworld: <a href={person.homeworld} target="_blank" rel="noopener noreferrer">Homeworld</a>
        </p>
      )}
    </div>
  );
}

export default People;
