// Import required modules and libraries
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei';

// Constants
const DAMPING_FACTOR = 0.2; // Controls the damping effect for scrolling
const LINE_COLOR = 'white'; // Color for the lines in the minimap
const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 5, 7, 9, 11].map((u) => `/${u}.jpg`); // Array of image URLs
const ITEM_WIDTH = 1.2; // Width of each item in the scrollable list
const ITEM_GAP = 0.25; // Gap between each item

// Create a basic material for the lines in the minimap
const material = new THREE.LineBasicMaterial({ color: LINE_COLOR });

// Create a basic geometry for the lines in the minimap
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

// Create a state object using Valtio library to manage the state of the application
const state = proxy({
  clicked: null, // Stores the index of the currently clicked item
  images: IMAGES, // Stores the array of image URLs
});

// Component for the minimap
function Minimap() {
  const ref = useRef();
  const scroll = useScroll();
  const { images } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);

  // Update the scale of each line in the minimap based on the scroll position
  useFrame((state, delta) => {
    ref.current.children.forEach((child, index) => {
      const y = scroll.curve(index / images.length - 1.5 / images.length, 4 / images.length);
      child.scale.y = THREE.MathUtils.damp(child.scale.y, 0.1 + y / 6, 8, 8, delta);
    });
  });

  return (
    <group ref={ref}>
      {/* Render a line for each image in the minimap */}
      {images.map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - images.length * 0.03, -height / 2 + 0.6, 0]}
        />
      ))}
    </group>
  );
}

// Component for each item in the scrollable list
function Item({ index, position, scale, color = new THREE.Color(), ...props }) {
  const imageRef = useRef();
  const scroll = useScroll();
  const { clicked, images } = useSnapshot(state);
  const [hovered, setHovered] = useState(false);

  // Handle click event on an item
  const handleClick = () => {
    state.clicked = index === clicked ? null : index;
  };

  // Handle pointer over event on an item
  const handlePointerOver = () => {
    setHovered(true);
  };

  // Handle pointer out event on an item
  const handlePointerOut = () => {
    setHovered(false);
  };

  // Update the position, scale, and appearance of each item based on the scroll position and user interaction
  useFrame((state, delta) => {
    const y = scroll.curve(index / images.length - 1.5 / images.length, 4 / images.length);
    imageRef.current.material.scale[1] = imageRef.current.scale.y = THREE.MathUtils.damp(
      imageRef.current.scale.y,
      clicked === index ? 5 : 4 + y,
      8,
      delta
    );
    imageRef.current.material.scale[0] = imageRef.current.scale.x = THREE.MathUtils.damp(
      imageRef.current.scale.x,
      clicked === index ? 4.7 : scale[0],
      6,
      delta
    );
    if (clicked !== null && index < clicked) {
      imageRef.current.position.x = THREE.MathUtils.damp(imageRef.current.position.x, position[0] - 2, 6, delta);
    }
    if (clicked !== null && index > clicked) {
      imageRef.current.position.x = THREE.MathUtils.damp(imageRef.current.position.x, position[0] + 2, 6, delta);
    }
    if (clicked === null || clicked === index) {
      imageRef.current.position.x = THREE.MathUtils.damp(imageRef.current.position.x, position[0], 6, delta);
    }
    imageRef.current.material.grayscale = THREE.MathUtils.damp(
      imageRef.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta
    );
    imageRef.current.material.color.lerp(color.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1);
    // WHAT THE FUCK?
  });

  return (
    <Image
      ref={imageRef}
      {...props}
      position={position}
      scale={scale}
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}

// Component for the scrollable list of items
function Items() {
  const { images } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = ITEM_WIDTH + ITEM_GAP;

  return (
    <ScrollControls horizontal damping={DAMPING_FACTOR} pages={(width - xW + images.length * xW) / width}>
      <Minimap />
      <Scroll>
        {/* Render an item for each image in the scrollable list */}
        {images.map((url, i) => (
          <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[ITEM_WIDTH, 4, 1]} url={url} />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

// Main component for the Works section
const Works = () => (
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
    <Items />
  </Canvas>
);

export default Works;
