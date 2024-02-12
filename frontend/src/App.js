// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import './global.css'
import TechnicalIssueMessage from './Pages/TempHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<TechnicalIssueMessage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
