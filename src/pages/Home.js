  import React, { useState, useEffect, useRef } from "react";
  import "./Home.css";

  const Home = () => {
    const slideSpeed = 10;
    const imageWidth = 30;
    const imageHeight = 46;
    const startingPositonPercentage = 50;
    const finalPositionPerentage = 50 * 5;

    const [deltaPosition, setDeltaPosition] = useState(0);
    const [imageInnerPercent, setImageInnerPercent] = useState(0);
    const containerRef = useRef(null);
    const imageContainerRef = useRef(null);

    const images = [  
      "https://live.staticflickr.com/65535/52494118190_6514e13fd7_z.jpg",
      "https://i.ytimg.com/vi/va7UMzMQbTQ/maxresdefault.jpg",
      "https://redigest.web.id/wp-content/uploads/2022/04/P1150149.jpg",
      "https://i.ytimg.com/vi/tk7VeMu-CRs/maxresdefault.jpg",
      "https://i.ytimg.com/vi/d5NCOYuXgOw/maxresdefault.jpg",
      "https://images.unsplash.com/photo-1664724492814-0b8de7d96142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Rhc2l1biUyMGphdGluZWdhcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1663299388965-0fc86ce86ff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a3JsJTIwamFib2RldGFiZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://upload.wikimedia.org/wikipedia/commons/d/df/CC_206_15_01_at_Cipatat_Station.jpg",
      "https://images.unsplash.com/photo-1664724852805-7c4b45522f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3Rhc2l1biUyMGphdGluZWdhcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
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

        const percentage = (newPosition / (finalPositionPerentage - startingPositonPercentage)) * 100;
        setImageInnerPercent(percentage);

        // Container sliding movement animation
        container.animate([{ transform: `translateX(calc(${50 + deltaPosition}% - ${imageWidth / 2}vmin))` }], {
          duration: 1200,
          fill: "forwards",
        });

        images.forEach((image) => {
          image.animate([{ objectPosition: `${100 + deltaPosition} center`}], {
            duration: 1000,
            fill: "forwards",
          })
        })



      };

      canvas.addEventListener("wheel", slider);

      return () => {
        canvas.removeEventListener("wheel", slider);
      };
    }, [deltaPosition, finalPositionPerentage]);

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