"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


// Detect whether the app is in production (deployed) or development (local)
const basePath = process.env.NODE_ENV === 'production'
  ? '/BC-React-App/'  // Replace with your actual repository name
  : '/';  // Local development path

const modelPath = `${basePath}models/crystal-transformed.glb`; // Construct the full path to the model





export default function CrystalModel(props) {
  const { nodes, materials } = useGLTF(modelPath);
  const modelref = useRef();

  useFrame(() => {
    modelref.current.rotation.y += 0.007;
  });

  // use Frame above used to rotate the 3d figure

  return (
    <group {...props} dispose={null} scale={[1, 1, 1]} ref={modelref}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Crystal} />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Symbols}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.061}
      />
    </group>
  );
}

useGLTF.preload(modelPath);

// Above code generated from https://github.com/pmndrs/gltfjsx for our crystal model.
