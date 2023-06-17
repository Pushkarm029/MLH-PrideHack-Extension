import './App.css';
import React from 'react';
import Navigation from './Navigation/app';
import Calender from './Calender/app';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Helpline from './Helpline/app';
import Guide from './Guide/app';
import News from './News/app';
import Locator from './Locator/app';
import Resources from './Resources/app';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Guide />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/news" element={<News />} />
          <Route path="/locator" element={<Locator />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
