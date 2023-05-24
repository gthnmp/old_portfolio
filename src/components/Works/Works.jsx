/**
 * Import required modules and libraries
 */
import * as THREE from 'three';
import { useRef, useState } from 'react';
import { proxy, useSnapshot } from 'valtio';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei';

/**
 * Constants
 * @constant {number} DAMPING_FACTOR - Controls the damping effect for scrolling
 * @constant {string} LINE_COLOR - Color for the lines in the minimap
 * @constant {string[]} IMAGES - Array of image URLs
 * @constant {number} ITEM_WIDTH - Width of each item in the scrollable list
 * @constant {number} ITEM_GAP - Gap between each item
 */
const DAMPING_FACTOR = 0.2;
const LINE_COLOR = 'white';
const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 5, 7, 9, 11].map((u) => `/${u}.jpg`);
const ITEM_WIDTH = 1.2;
const ITEM_GAP = 0.25;

/**
 * Create a basic material for the lines in the minimap
 * @type {THREE.LineBasicMaterial}
 */
const material = new THREE.LineBasicMaterial({ color: LINE_COLOR });

/**
 * Create a basic geometry for the lines in the minimap
 * @type {THREE.BufferGeometry}
 */
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

/**
 * State object using Valtio library to manage the state of the application
 * @type {Object}
 * @property {number} clicked - Index of the currently clicked item
 * @property {string[]} images - Array of image URLs
 */
const state = proxy({
  clicked: null,
  images: IMAGES,
});

/**
 * Component for the minimap
 * @component
 * @returns {JSX.Element} Minimap component
 */
function Minimap() {
  const ref = useRef();
  const scroll = useScroll();
  const { images } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);

  /**
   * Update the scale of each line in the minimap based on the scroll position
   * @param {THREE.Renderer} state - The current render state
   * @param {number} delta - The time delta since the last frame update
   */
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

/**
 * Component for each item in the scrollable list
 * @component
 * @param {Object} props - Component props
 * @param {number} props.index - Index of the item
 * @param {number[]} props.position - Position of the item
 * @param {number[]} props.scale - Scale of the item
 * @param {THREE.Color} [props.color=new THREE.Color()] - Color of the item
 * @returns {JSX.Element} Item component
 */
function Item({ index, position, scale, color = new THREE.Color(), ...props }) {
  const imageRef = useRef();
  const scroll = useScroll();
  const { clicked, images } = useSnapshot(state);
  const [hovered, setHovered] = useState(false);

  /**
   * Handle click event on an item
   */
  const handleClick = () => {
    state.clicked = index === clicked ? null : index;
  };

  /**
   * Handle pointer over event on an item
   */
  const handlePointerOver = () => {
    setHovered(true);
  };

  /**
   * Handle pointer out event on an item
   */
  const handlePointerOut = () => {
    setHovered(false);
  };

  /**
   * Update the position, scale, and appearance of each item based on the scroll position and user interaction
   * @param {THREE.Renderer} state - The current render state
   * @param {number} delta - The time delta since the last frame update
   */
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

/**
 * Component for the scrollable list of items
 * @component
 * @returns {JSX.Element} Items component
 */
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

/**
 * Main component for the Works section
 * @component
 * @returns {JSX.Element} Works component
 */
const Works = () => (
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
    <Items />
  </Canvas>
);

export default Works;
