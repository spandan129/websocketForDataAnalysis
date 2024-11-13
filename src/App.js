import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import './index.css';
import { Home } from './Components/Home';
import { AboutUs } from './Components/AboutUs';
import { Contact } from './Components/Contact';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

function App() {

    

  return (
    <>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;