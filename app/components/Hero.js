"use client"
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import School3D from "./SchoolInfo";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-blue-900">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <OrbitControls />
        <Center>
          <Text3D 
            font="/fonts/helvetiker_regular.typeface.json"
            size={1}
            position={[-3, 0, 0]}
          >
            SCHOOL NAME
            <meshNormalMaterial />
          </Text3D>
        </Center>
      </Canvas>
      <h1 className="absolute text-white text-4xl font-bold">
        Welcome to Our School
      </h1>
      <p className="text-lg max-w-2xl">
        A place where education meets innovation.
      </p>
      <School3D />
    </section>
  );
}