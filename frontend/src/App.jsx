import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <HeroSection />
     
     <Routes>
        <Route path="/" element={<HeroSection />}>
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
