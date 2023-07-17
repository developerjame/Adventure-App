import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import Services from './components/pages/Services';
import Video1 from './components/pages/Video1';
import Packages from './components/pages/Packages';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/packages' element={<Packages/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/video1' element={<Video1/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
