import { useEffect } from "react";

export function ImageSlider(imageContainerRef, containerRef, deltaPosition, slideSpeed, setDeltaPosition, imageWidth) {
  useEffect(() => {
    const canvas = document.getElementById("canvas");
    const images = imageContainerRef.current.querySelectorAll('.image');
    const container = containerRef.current;

    const slider = (e) => {
      let newPosition = e.deltaY < 0 ? deltaPosition + slideSpeed : deltaPosition - slideSpeed;
      newPosition = Math.min(newPosition, 0);
      setDeltaPosition(newPosition);
      console.log(deltaPosition);

      // Container sliding movement animation
      container.animate([{ transform: `translateX(calc(${50 + deltaPosition}% - ${imageWidth / 2}vmin))` }], {
        duration: 1200,
        fill: "forwards",
      });

      // Image inner sliding movement animation
      let imageMovingPercetage = Math.max(-100, deltaPosition);
      images.forEach((image) => {
        image.animate([{ objectPosition: `${100 + imageMovingPercetage}% center` }], {
          duration: 1200,
          fill: "forwards",
        });
      });
    };
    canvas.addEventListener("wheel", slider);
    return () => {
      canvas.removeEventListener("wheel", slider);
    };
  }, [deltaPosition, setDeltaPosition]);
}
