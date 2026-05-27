"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  OrbitControls,
} from "@react-three/drei";

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <color attach="background" args={["#050816"]} />

        <ambientLight intensity={2} />

        <directionalLight
          position={[2, 2, 2]}
          intensity={2}
        />

        <Float
          speed={2}
          rotationIntensity={2}
          floatIntensity={2}
        >
          <Sphere args={[1, 128, 128]} scale={2}>
            <MeshDistortMaterial
              color="#06b6d4"
              distort={0.5}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}