import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navigation() {
  const [isClicked, setIsClicked] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(!isClicked);
    navigate(isClicked ? '/about' : '/');
  };

  const textStyle = {
    position: 'absolute',
    fontSize: '13px',
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
      <a
        href="https://github.com/gthnmp"
        target="_blank"
        rel="noreferrer"
        style={{ ...textStyle, top: 40, left: 40 }}
      >
        Gathan Mahesa
        <br />
        Front-end Developer
      </a>
      <a onClick={handleClick} style={{ ...textStyle, top: 40, right: 40 }}>
        {isClicked ? '— about' : '— close'}
      </a>
      <div className = 'bottom-part' style={{ ...textStyle, bottom: 40, left: 40, pointerEvents: 'none' }}>gthnmp —</div>
      <div className = 'bottom-part' style={{ ...textStyle, bottom: 40, right: 40, pointerEvents: 'none' }}>2023</div>
    </div>
  );
}
