import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingNumber, setLoadingNumber] = useState(0);


  useEffect(() => {
    const loader = setInterval(() => {
      if (loadingNumber !== 100){
        setLoadingNumber((prevLoadingNumber) => prevLoadingNumber + 1)
      } else {}
      clearInterval(loader);
    }, 3000);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer)
      clearInterval(loader)
    }

  }, []);

  return (
    <div className={`preloader ${isLoading ? 'show' : 'hide'}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Preloader;
