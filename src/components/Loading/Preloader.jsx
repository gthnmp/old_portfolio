import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import './Preloader.css';

const LINE_COLOR = "white";

const material = new THREE.LineBasicMaterial({ color : LINE_COLOR});
// const geometry 


const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoading ? 'show' : 'hide'}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
