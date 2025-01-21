"use client"; // renders this as a client component
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

const RenderModel = ({ children, className }) => {
  return (
    <Canvas className={clsx("w-screen h-screen relative", className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;

// Above, I export a function that creates a canvas to render our 3d object.
// Suspense is used for loading and the enviornment sets the lighting of the object.
