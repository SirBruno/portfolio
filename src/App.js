import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Hi, my name is Bruno Pereira, and i'm a frontend developer.</h1>
          <p>São Paulo, Brazil.</p>
          <p>WhatsApp: <b>(19) 97115 9735</b>.</p>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;