import React, { useState } from 'react';
import Person from './Person';
import './App.css';

function App() {
  const [people, setPeople] = useState([
    { id: 1, firstName: 'Jane', lastName: 'Doe', age: 45, hairColor: 'Black' },
    { id: 2, firstName: 'John', lastName: 'Smith', age: 88, hairColor: 'Brown' },
  ]);

  const handleBirthday = (id) => {
    setPeople(people.map(person =>
      person.id === id ? { ...person, age: person.age + 1 } : person
    ));
  };

  return (
    <div className="App">
      {people.map(person => (
        <Person key={person.id} person={person} onBirthday={handleBirthday} />
      ))}
    </div>
  );
}

export default App;