import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Works, About, Navbar, Preloader} from './components'
import './App.css';


function App() {
  return (
    <>
      <main className="App">
          <Routes>
            <Route path = "/" element = {<Works/>}/>
            <Route path = "/about" element = {<About/>}/>
          </Routes>
        <Navbar/>
      </main>
    </>
  );
}

export default App;
