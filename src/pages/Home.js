import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const IMAGE_WIDTH                                   = 25;
  const IMAGE_HEIGHT                                  = 46;
  const CONTAINER_STARTING_POSITION                   = IMAGE_WIDTH / 2;
  const CONTAINER_FINAL_POSITION                      = (CONTAINER_STARTING_POSITION) * 20;
  const SPEED                                         = 20;
  const [ containerPosition, setContainerPosition ]   = useState(CONTAINER_STARTING_POSITION)
  const [ imageInnerPosition, setImageInnerPosition ] = useState(0)

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
    width: `${IMAGE_WIDTH}vmin`,
    height: `${IMAGE_HEIGHT}vmin`,
    objectFit: "cover",
  };

  const containerStyle = {
    width: "100%",
    height: "auto",
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas");

    canvas.addEventListener('wheel', (e) => {
      if (e.deltaY < 0){
        setContainerPosition(Math.max(containerPosition - SPEED , CONTAINER_STARTING_POSITION))
      } else {
        setContainerPosition(Math.min(containerPosition + SPEED, CONTAINER_FINAL_POSITION))
      }
    })  

    const container = document.getElementById('container');
    container.animate(
      { transform: `translateX(calc(50% - ${containerPosition}vmin))` },
      { duration: 1500, fill: 'forwards' }
    );
  
  },[containerPosition, CONTAINER_STARTING_POSITION, CONTAINER_FINAL_POSITION])


  return (
    <>
      <canvas id="canvas"></canvas>
      <div id = "cross"><p>+</p></div>
      <section style={containerStyle} id="container" data-scroll-current-position="0">
        <div id="image-container">
          {images.map((src, index) => (
            <img
              key={index}
              style={imageStyle}
              alt="KRL"
              draggable="false"
              src={src}
            ></img>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
