import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const PrecisionGrid = () => {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 0.5) % 1;
    }
  });

  return (
    <group position={[0, -2, 0]}>
      <gridHelper ref={gridRef} args={[100, 100, '#0284c7', '#94a3b8']} position={[0, 0, 0]} />
      {/* Dark mode grid will rely on CSS or we can just keep it subtle slate */}
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-950 transition-colors duration-500 overflow-hidden">
      <Canvas camera={{ position: [0, 1, 8], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#0284c7" />
        
        <PrecisionGrid />
        
        <ContactShadows position={[0, -1.9, 0]} opacity={0.4} scale={20} blur={2} far={4} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
