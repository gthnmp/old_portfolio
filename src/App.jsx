import React, { useState, useEffect } from 'react';
import { Home, About, Navbar } from './components'
import './App.css';

function App() {
  const [activePageId, setActivePageId] = useState("home");
  const [hiddenPageId, setHiddenPageId] = useState("about");

  useEffect(() => {
    const activePage = document.getElementById(activePageId);
    const hiddenPage = document.getElementById(hiddenPageId);
    console.log("active page: " + activePageId)
    console.log("hidden page: " + hiddenPageId)

    activePage.classList.remove('hidden')
    hiddenPage.classList.add('hidden')

  },[activePageId, hiddenPageId]);

  function handleNavigation(pageId) {
    setActivePageId(pageId);
    setHiddenPageId(pageId === "home" ? "about" : "home");
  }

  return (
    <>
      <main className="App">
        <div id="home" className="page">
          <Home />
        </div>
        <div id="about" className="page">
          <About />
        </div>
      </main>
      <div className="navbar">
        <Navbar handleNavigation = { handleNavigation } activePageId = { activePageId }/>
      </div>
    </>
  );
}

export default App;
