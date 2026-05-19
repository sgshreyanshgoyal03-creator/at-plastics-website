import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#0284c7" />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
