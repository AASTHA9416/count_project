// App.js

import React, { useState } from 'react';
import Navbar from './Navbar';
// CSS file
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <Navbar count={count} resetCount={resetCount} />
      <div className="content">
        <h1 className="main-count">Count: {count}</h1>
        <button className="increase-count" onClick={increaseCount}>
          Increase Count
        </button>
      </div>
    </div>
  );
}

export default App;
