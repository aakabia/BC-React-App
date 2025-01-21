"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function HelmetModel(props) {
  const { nodes, materials } = useGLTF("/models/helmet-transformed.glb");
  const modelref = useRef();

  useFrame(() => {
    modelref.current.rotation.y += 0.003;
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={[8, 8, 8]}
      rotation={[0.3, 3.1, -0.075]}
      ref={modelref}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Material6-material"].geometry}
        material={materials["Material2-material"]}
        rotation={[1.095, -1.52, -0.644]}
        scale={0.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Material1-material"].geometry}
        material={materials["Material1-material"]}
        position={[-0.004, 0.095, -0.079]}
        rotation={[-1.401, -0.041, 0.03]}
        scale={[0.243, 0.23, 0.292]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Material3-material"].geometry}
        material={materials["Material3-material"]}
        position={[-0.004, 0.095, -0.079]}
        rotation={[-1.401, -0.041, 0.03]}
        scale={[0.243, 0.23, 0.292]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Material5-material"].geometry}
        material={materials["Material5-material"]}
        position={[-0.004, 0.095, -0.079]}
        rotation={[-1.401, -0.041, 0.03]}
        scale={[0.243, 0.23, 0.292]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Material0-material"].geometry}
        material={materials["Material0-material"]}
        position={[-0.005, 0.121, -0.094]}
        rotation={[-1.401, -0.041, 0.03]}
        scale={0.262}
      />
    </group>
  );
}

useGLTF.preload("/models/helmet-transformed.glb");

// Above code generated from https://github.com/pmndrs/gltfjsx for our helmet model.