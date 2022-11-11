import React from 'react';
import { Index } from './components/Index'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import './components/css/styles.css';
import { Registrate } from './components/Registrate';
import { Enterprises } from './components/Enterprises';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Index/>}></Route>
      <Route path="/Registrate" element={<Registrate/>}></Route>
      <Route path="/Enterprises" element={<Enterprises/>}></Route>
      </Routes>
    </div>
  );
}

export default App
