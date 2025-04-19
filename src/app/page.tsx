// https://codesandbox.io/p/sandbox/nvk9pf
// https://codesandbox.io/p/sandbox/7qytdw

"use client";

import { Canvas } from '@react-three/fiber'
import { Physics, RigidBody } from '@react-three/rapier'
import { Environment, Fisheye, Gltf, KeyboardControls } from '@react-three/drei'
import Controller from 'ecctrl'
import { Box, Cactus, Camera, Level, Sudo } from './Scene'

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
]

const Home = () => {
  return (
    <div className="h-screen">
      <Canvas
        // onPointerDown={(e) =>
        //   (e.target as HTMLCanvasElement).requestPointerLock()
        // }
        flat
      >
        <Fisheye zoom={0}>
          <ambientLight intensity={Math.PI / 2} />
          <Environment preset="city" background blur={1} />
          <Physics timeStep="vary">
            <KeyboardControls map={keyboardMap}>
              <Controller maxVelLimit={5}>
                <Gltf
                  castShadow
                  receiveShadow
                  scale={0.315}
                  position={[0, -0.55, 0]}
                  src="/test/ghost_w_tophat-transformed.glb"
                />
              </Controller>
            </KeyboardControls>
            <RigidBody type="fixed" colliders="trimesh">
              <group scale={20} position={[5, -11, -5]}>
                <Box position={[-0.8, 1.4, 0.4]} scale={0.15} />
                <Cactus />
                <Camera />
                <Level />
                <Sudo />
              </group>
            </RigidBody>
          </Physics>
        </Fisheye>
      </Canvas>
    </div>
  )
}

export default Home
