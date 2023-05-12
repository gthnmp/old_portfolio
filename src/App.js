import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <>
      <div className = "navbar">
        <Navbar></Navbar> 
      </div>
      <div className="App">
        <Home></Home>
        <About></About>
      </div>
    </>
  );
}

export default App;
