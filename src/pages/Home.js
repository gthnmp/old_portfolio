import React, {useEffect, useState} from "react";
import './Home.css'

const Home = () => {

  // useEffect(() => {
  //   const handleScroll = e => {
  //     console.log("scrolled!")
  //   };

  //   const canvas = document.getElementById('canvas');
  //   canvas.addEventListener('scroll', handleScroll);

  //   return () => {
  //     canvas.removeEventListener('wheel', handleScroll);
  //   }
  // }, [])
  // const [ pageTitle, setPageTitle ] = useState("")

  return (
    <>
      <canvas id = "canvas"></canvas>
      <section id = "container" data-scroll-current-position = "0">
        <div id = "image-container">
          <img className = "image" alt = "KRL" draggable = "false" src = "https://live.staticflickr.com/65535/52494118190_6514e13fd7_z.jpg"></img>
          <img className = "image" alt = "KRL" draggable = "false" src = "https://redigest.web.id/wp-content/uploads/2022/04/P1150149.jpg"></img>
          <img className = "image" alt = "KRL" draggable = "false" src = "https://i.ytimg.com/vi/tk7VeMu-CRs/maxresdefault.jpg"></img>
          <img className = "image" alt = "KRL" draggable = "false" src = "https://i.ytimg.com/vi/va7UMzMQbTQ/maxresdefault.jpg"></img>
          <img className = "image" alt = "KRL" draggable = "false" src = "https://images.unsplash.com/photo-1664724492814-0b8de7d96142?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3Rhc2l1biUyMGphdGluZWdhcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img>
          <img className = "image" alt = "KRL" draggable = "false" src = "https://images.unsplash.com/photo-1663299388965-0fc86ce86ff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a3JsJTIwamFib2RldGFiZWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img>
          <img className = "image" alt = "KRL" draggable = "false" src = "https://upload.wikimedia.org/wikipedia/commons/d/df/CC_206_15_01_at_Cipatat_Station.jpg"></img>
          <img className = "image" alt = "KRL" draggable = "false" src = "https://images.unsplash.com/photo-1664724852805-7c4b45522f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3Rhc2l1biUyMGphdGluZWdhcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></img>
        </div>
      </section>
    </>
  );
}

export default Home;