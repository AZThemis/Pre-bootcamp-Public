import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Vehicles() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/vehicles/${id}/`)
      .then(response => {
        setVehicle(response.data);
        setError(null);
      })
      .catch(() => {
        setVehicle(null);
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

  if (!vehicle) return <p>Loading...</p>;

  return (
    <div className="result">
      <h2>{vehicle.name}</h2>
      <p>Model: {vehicle.model}</p>
      <p>Manufacturer: {vehicle.manufacturer}</p>
      <p>Cost in Credits: {vehicle.cost_in_credits}</p>
      <p>Vehicle Class: {vehicle.vehicle_class}</p>
    </div>
  );
}

export default Vehicles;
