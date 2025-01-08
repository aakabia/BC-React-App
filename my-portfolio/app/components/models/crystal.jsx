
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function CrystalModel(props) {
  const { nodes, materials } = useGLTF('/models/crystal-transformed.glb')
  const modelref = useRef()

  useFrame(()=>{
    modelref.current.rotation.y += 0.007

  })

  // use Frame above used to rotate the 3d figure 


  return (
    <group {...props} dispose={null} scale={[1,1,1]} ref={modelref}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Crystal} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Symbols} rotation={[Math.PI / 2, 0, 0]} scale={0.061} />
    </group>
  )
}

useGLTF.preload('/models/crystal-transformed.glb')


// Above code generated from https://github.com/pmndrs/gltfjsx