import { useEffect } from "react";

/**
 * ImageSlider is a custom hook that handles the sliding animation of images.
 *
 * @param {object} imageContainerRef - Reference to the image container element.
 * @param {object} containerRef - Reference to the container element.
 * @param {number} deltaPosition - Current position of the slider.
 * @param {number} slideSpeed - Speed of the slider movement.
 * @param {function} setDeltaPosition - Function to update the deltaPosition.
 * @param {number} imageWidth - Width of each image.

 */

export default function ImageSlider(imageContainerRef, containerRef, deltaPosition, slideSpeed, setDeltaPosition, imageWidth) {
  const startPosition = 0;
  const finalPosition = -122.5;

  useEffect(() => {
    const images = imageContainerRef.current.querySelectorAll('.image');
    const container = containerRef.current;

    /**
     * Slider function handles the sliding movement of the container and images.
     *
     * @param {object} e - Wheel event object.
     */
    const slider = (e) => {
      let newPosition = e.deltaY < 0 ? deltaPosition + slideSpeed : deltaPosition - slideSpeed;
      newPosition = Math.min(Math.max(newPosition, finalPosition), startPosition);
      setDeltaPosition(newPosition);

      // Container sliding movement animation
      container.animate([{ transform: `translateX(calc(${50 + deltaPosition}% - ${imageWidth / 2}vmin))` }], {
        duration: 1200,
        fill: "forwards",
      });

      // Image inner sliding movement animation
      let percentage = (deltaPosition / (-finalPosition)) * 100
      let imageMovingPercentage = Math.max(-100, percentage);
      images.forEach((image) => {
        image.animate([{ objectPosition: `${100 + imageMovingPercentage}% center` }], {
          duration: 1200,
          fill: "forwards",
        });
      });
    };

    // Add wheel event listener to the canvas
    window.addEventListener("wheel", slider);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("wheel", slider);
    };
  }, [deltaPosition, setDeltaPosition]);
}
