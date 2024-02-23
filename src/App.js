import React from 'react';
import Navbar from './Components/navbar';
import LoginSignup from './pages/Login/LoginSignup';
import HeroSection from './pages/Hero/HeroSection'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<HeroSection/>} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
