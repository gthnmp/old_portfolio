import React, { useState, useEffect, Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom'
import { Works, About, Navbar, Preloader} from './components'
import './App.css';


function App() {
  return (
    <>
      <main className="App">
        <Suspense>
          <Works/>
        </Suspense>
        <Navbar/>
      </main>
    </>
  );
}

export default App;
