import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Olá, meu nome é Bruno Pereira, e eu sou desenvolvedor web.</h1>
          <p>Mogi Mirim, SP.</p>
          <p>WhatsApp: <b>(19) 97115 9735</b>.</p>
          {/* <Counter /> */}
        </div>
      </header>
    </div>
  );
}

export default App;