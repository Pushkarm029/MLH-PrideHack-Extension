import './App.css';
import React from 'react';
import Navigation from './Navigation/app';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Router>
          <Navigation/>
          <Routes>
            {/* <Route exact path = '/Landing' element={<Landing/>} /> */}
            {/* <Route path='/Search' element={<Search />} />
            <Route path='/Explore' element={<Explore />} />
            <Route path='/Reels' element={<Reels />} />
            <Route path='/Messages' element={<Messages />} />
            <Route path='/Create' element={<Create />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/More' element={<More />} /> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
