import React from 'react';

const Gallery = ( {imageWidth, imageHeight, deltaPosition, containerRef, imageContainerRef} ) => {
  const image_list = [  
    "https://images4.alphacoders.com/110/thumbbig-110756.webp",
    "https://images7.alphacoders.com/435/thumbbig-435083.webp",
    "https://images3.alphacoders.com/198/thumbbig-198825.webp",
    "https://images4.alphacoders.com/290/thumbbig-290324.webp",
    "https://images6.alphacoders.com/318/thumbbig-318263.webp",
    "https://images.alphacoders.com/106/thumbbig-1067208.webp",
    "https://wallpapercave.com/dwp1x/wp3536110.jpg"
  ];
  
  const imageFixedStyle = {
    width: `${imageWidth}vmin`,
    height: `${imageHeight}vmin`,
    objectFit: "cover",
  };
  
  const containerFixedStyle = {
    width: "100%",
    height: "auto",
    transform: `translateX(calc(${50 - deltaPosition}% - ${imageWidth / 2}vmin))`,
  };

  return (
    <>
      <canvas id="canvas"></canvas>
      <div id="cross">
        <p>+</p>
      </div>
      <section style={containerFixedStyle} id="container" ref={containerRef}>
        <div id="image-container" ref={imageContainerRef}>
          {image_list.map((src, index) => (
            <img
              key={index}
              style={imageFixedStyle}
              alt="KRL"
              draggable="false"
              src={src}
              className = "image"
            ></img>
          ))}
        </div>
      </section>
    </>
  )
}

export default Gallery;