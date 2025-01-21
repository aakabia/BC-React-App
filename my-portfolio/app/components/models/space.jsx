"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function SpaceModel(props) {
  const { nodes, materials } = useGLTF("/models/astro-transformed.glb"); // load our glb file from our models folder located in the public directory
  const modelRef = useRef(); // to maintain model reference without re rendering.
  useFrame((state, delta, xrFrame) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        -0.25 + Math.sin(state.clock.elapsedTime) * 0.15; // Using dynamic model reference
      // note: look up sine wave oscillation to understand what is happening above.
    }
  });

  // Above causes the up and down transition for the model,
  // This is done by changing the y position by using Math.sine to create a smooth oscillating value based on the elapsed time.

  return (
    <group {...props} dispose={null} rotation={[0.25, 0.5, 0]} ref={modelRef}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Character_Texture}
        position={[0.2, -0.7, -0.072]}
        scale={0.6}
      />
    </group>
  );

  // Above is the model itself. group represents  the container for the model while mesh is the actual model.
}

// Above I export a function that defines a React component that loads and renders a 3D model in a Three.js scene using @react-three/drei and @react-three/fiber.

useGLTF.preload("/models/astro-transformed.glb");

//  Above, Preloads the GLTF file to ensure faster rendering when the model is used.

// All code above was generated from gltfjsx package using the command line then updated by me.
