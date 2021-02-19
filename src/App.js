import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Hi, my name is Bruno Pereira, and i'm a front-end engineer.</h1>
          <p>My skills include HTML, CSS, React and WordPress.</p>
          <p>Living in São Paulo, Brazil.</p>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;