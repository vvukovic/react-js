import React from 'react';
import './App.css';
import person from './Person'
import { num1, num2, sum } from './Utility'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Moja prva aplikacija!
        </p>
        <p>Dobar dan, {person.name}</p>
        <p>Imate godina: {sum(num1, num2)}</p>
      </header>
    </div>
  );
}

export default App;
