  import React, { useState, useEffect, useRef } from "react";
  import "./Home.css";

  const Home = () => {
    const slideSpeed        = 10;
    const imageWidth        = 30;
    const imageHeight       = 46;
    const containerRef      = useRef(null);
    const imageContainerRef = useRef(null);
    const [deltaPosition, setDeltaPosition] = useState(0);

    const images = [  
      "https://images4.alphacoders.com/290/thumbbig-290324.webp",
      "https://images3.alphacoders.com/198/thumbbig-198825.webp",
      "https://images4.alphacoders.com/110/thumbbig-110756.webp",
      "https://images7.alphacoders.com/435/thumbbig-435083.webp",
      "https://images6.alphacoders.com/318/thumbbig-318263.webp",
      "https://images.alphacoders.com/106/thumbbig-1067208.webp",
      "https://images.alphacoders.com/484/thumbbig-484487.webp",
      "https://images6.alphacoders.com/390/thumbbig-390255.webp",
    ];

    const imageStyle = {
      width: `${imageWidth}vmin`,
      height: `${imageHeight}vmin`,
      objectFit: "cover",
    };

    const containerStyle = {
      width: "100%",
      height: "auto",
      transform: `translateX(calc(${50 - deltaPosition}% - ${imageWidth / 2}vmin))`,
    };

    useEffect(() => {
      const canvas = document.getElementById("canvas");
      const images = imageContainerRef.current.querySelectorAll('.image')
      const container = containerRef.current;

      const slider = (e) => {
        let newPosition = e.deltaY < 0 ? deltaPosition + slideSpeed : deltaPosition - slideSpeed;
        newPosition = Math.min(newPosition, 0)
        setDeltaPosition(newPosition);
        console.log(deltaPosition)

        // Container sliding movement animation
        container.animate([{ transform: `translateX(calc(${50 + deltaPosition}% - ${imageWidth / 2}vmin))` }], {
          duration: 1000,
          fill: "forwards",
        });

        let imageMovingPercetage = Math.max(-100, deltaPosition)
        images.forEach((image) => {
          image.animate([{ objectPosition: `${100 + imageMovingPercetage}% center`}], {
            duration: 1200,
            fill: "forwards",
          })
        })



      };

      canvas.addEventListener("wheel", slider);

      return () => {
        canvas.removeEventListener("wheel", slider);
      };
    }, [deltaPosition]);

    return (
      <>
        <canvas id="canvas"></canvas>
        <div id="cross">
          <p>+</p>
        </div>
        <section style={containerStyle} id="container" ref={containerRef}>
          <div id="image-container" ref={imageContainerRef}>
            {images.map((src, index) => (
              <img
                key={index}
                style={imageStyle}
                alt="KRL"
                draggable="false"
                src={src}
                className = "image"
              ></img>
            ))}
          </div>
        </section>
      </>
    );
  };

  export default Home;