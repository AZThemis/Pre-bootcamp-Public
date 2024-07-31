import React from 'react';

function Person({ person, onBirthday }) {
  return (
    <div>
      <h2>{person.lastName}, {person.firstName}</h2>
      <p>Age: {person.age}</p>
      <p>Hair Color: {person.hairColor}</p>
      <button onClick={() => onBirthday(person.id)}>Birthday Button for {person.firstName} {person.lastName}</button>
    </div>
  );
}

export default Person;