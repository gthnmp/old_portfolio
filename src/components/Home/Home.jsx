import React, { useState, useRef } from "react";
import { ImageSlider } from "./ImageSlider";
import Gallery from "./Gallery";  
import "./Home.css";

const Home = () => {
  const containerRef      = useRef(null);
  const imageContainerRef = useRef(null);
  const slideSpeed        = 15;
  const [deltaPosition, setDeltaPosition] = useState(0);
  const imageWidth        = 25;
  const imageHeight       = 56;

  ImageSlider(
    imageContainerRef, 
    containerRef, 
    deltaPosition, 
    slideSpeed, 
    setDeltaPosition, 
    imageWidth
  );

  return (
    <Gallery
      imageWidth ={ imageWidth }
      imageHeight = { imageHeight }
      deltaPosition = { deltaPosition }
      containerRef = { containerRef }
      imageContainerRef = { imageContainerRef }
    />
  );
};

export default Home;


