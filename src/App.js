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

let pathHistory = [];

function updatePathHistory() {
    const currentPath = window.location.pathname; 
    pathHistory.push(currentPath); 
}

async function handleUserCreation() {
    let userId = localStorage.getItem("userId");
    if (!userId) {
        const response = await fetch("http://localhost:8000/create_user");
        const data = await response.json();
        console.log(data.user_id);
        userId = data.user_id;
        localStorage.setItem("userId", userId);
    }
    return userId;
}

async function setupWebSocket() {
    const userId = await handleUserCreation(); 
    const socketStart = new Date().toISOString(); 
    const socket = new WebSocket('ws://localhost:8000/ws/session');

    socket.onopen = () => {
        console.log('WebSocket connection established');
    };

    function handleBeforeUnload(event) {
        const sessionEnd = new Date().toISOString(); 
        const sessionData = {
            event: "on_close",
            user_id: userId,
            session_start: socketStart,
            session_end: sessionEnd,
            path_history: pathHistory, 
        };

        socket.send(JSON.stringify(sessionData)); 

        event.returnValue = 'Are you sure you want to leave?'; 
    }

    window.addEventListener('beforeunload', handleBeforeUnload); 

    return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload); 
        socket.close(); 
    };
}

updatePathHistory();

setupWebSocket();

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