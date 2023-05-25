import React, { useState, useRef } from "react";
import { Gallery, ImageSlider } from './works-components'
import "./Works.css";

const Works = () => {
  const slideSpeed        = 10;
  const imageWidth        = 35;
  const imageHeight       = 56;
  const containerRef      = useRef(null);
  const imageContainerRef = useRef(null);
  const [deltaPosition, setDeltaPosition] = useState(0);

  ImageSlider(
    imageContainerRef, 
    containerRef, 
    deltaPosition, 
    slideSpeed, 
    setDeltaPosition, 
    imageWidth
  );

  return (
    <div className = 'container'>
      <Gallery
        imageWidth ={ imageWidth }
        imageHeight = { imageHeight }
        deltaPosition = { deltaPosition }
        containerRef = { containerRef }
        imageContainerRef = { imageContainerRef }
      />
    </div>
  );
};

export default Works;


