import React from 'react';
import './Navbar.css';

export default function Navigation() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://github.com/gthnmp" target='_blank' style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }} rel="noreferrer">
        Gathan Mahesa
        <br />
        Front-end Developer 
      </a>
      <a href = "/about" style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px'}}>— about</a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>gthnmp —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>2023</div>
    </div>
  )
}

