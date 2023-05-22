import React from 'react';

const Gallery = ({ imageWidth, imageHeight, deltaPosition, containerRef, imageContainerRef }) => {
  const image_list = [
    "https://w0.peakpx.com/wallpaper/188/1016/HD-wallpaper-black-bmw-bmw-5-series-sedans-2015-road-f10.jpg",
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

  const handleClick = (imageId) => {
    const image = document.getElementById(imageId);
    if (image) {
      image.style.scale = "100%";
    }
  };

  return (
    <section style={containerFixedStyle} id="container" ref={containerRef}>
      <div id="image-container" ref={imageContainerRef}>
        {image_list.map((src, index) => (
          <img
            key={index}
            id={index + 1}
            style={imageFixedStyle}
            alt="KRL"
            draggable="false"
            src={src}
            className="image"
            onClick={() => handleClick(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
