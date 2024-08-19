import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Router>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Textform heading="Try Textutiles - word counter, character counter, Remove extra spaces" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

