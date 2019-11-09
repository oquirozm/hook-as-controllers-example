import React from 'react';
import './App.css';
import CharacterForm from './features/CharacterForm';

function App() {
  console.log(process.env);
  return (
    <div className='App'>
      <header className='App-header'>
        <CharacterForm />
      </header>
    </div>
  );
}

export default App;
