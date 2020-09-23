import React from 'react';

import './App.css';
import Dictaphone from './components/Dictaphone'
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <Dictaphone/>
      </header>
    </div>
  );
}

export default App;
