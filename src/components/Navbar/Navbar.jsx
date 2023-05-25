/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navigation() {
  const [ isClicked , setIsClicked ] = useState(true);
  const navigate = useNavigate();

  function handleClick (){
    setIsClicked(!isClicked);
    if (isClicked){
      navigate('/about');
    } else {
      navigate('/')
    }
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://github.com/gthnmp" target='_blank' style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }} rel="noreferrer">
        Gathan Mahesa
        <br />
        Front-end Developer 
      </a>
      <a onClick={handleClick} style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px'}}>
        {isClicked ? '— about' : '— close'}
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px', pointerEvents: 'none' }}>gthnmp —</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px', pointerEvents: 'none' }}>2023</div>
    </div>
  )
}

