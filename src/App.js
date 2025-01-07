import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; // Correct path for Home
import Navbar from './components/Navbar/Navbar'; // Correct path for Navbar
import RegisterForm from './components/RegisterForm'; // Correct path for Register
// import Footer from './components/footer/footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;