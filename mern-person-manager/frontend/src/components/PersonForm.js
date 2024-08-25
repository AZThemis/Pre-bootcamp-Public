
import React, { useState } from 'react';
import axios from 'axios';

const PersonForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/people', {
      firstName,
      lastName
    })
    .then(res => {
      console.log(res);
      setFirstName('');
      setLastName('');
    })
    .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <button type="submit">Create Person</button>
    </form>
  );
}

export default PersonForm;
