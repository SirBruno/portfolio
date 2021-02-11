import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="#">About Me</a>
        </nav>
        <div>
          <p>Hi, my name is Bruno Pereira, and i'm a front-end engineer.</p>
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;