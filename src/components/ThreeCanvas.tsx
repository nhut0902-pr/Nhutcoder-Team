import { Float, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function TechCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  // Tạo các hạt bụi xung quanh cho cảm giác không gian
  const particlesCount = 1000;
  const [positions] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return [pos];
  }, []);

  useFrame((state, delta) => {
    const { x, y } = state.pointer;
    
    // Xoay nhẹ tự nhiên
    if (coreRef.current) coreRef.current.rotation.z += delta * 0.5;
    if (outerRef.current) {
      outerRef.current.rotation.y -= delta * 0.3;
      outerRef.current.rotation.x += delta * 0.2;
    }

    // LookAt mượt mà
    if (groupRef.current) {
      const target = new THREE.Vector3(x * 3, y * 3, 5);
      groupRef.current.lookAt(target);
      groupRef.current.position.lerp(new THREE.Vector3(x * 0.8, y * 0.8, 0), 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Lõi phát sáng - Teal */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial 
          color="#16A394" 
          speed={2} 
          distort={0.4} 
          radius={1}
          emissive="#115e59"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Lưới bao quanh - Orange Accents */}
      <mesh ref={outerRef} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#F97316" 
          wireframe 
          transparent 
          opacity={0.2} 
        />
      </mesh>

      {/* Hệ thống hạt - Teal/White */}
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#16A394"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="w-full h-full relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} intensity={1.5} color="#16A394" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#F97316" />
        <Float speed={3} rotationIntensity={1} floatIntensity={2}>
          <TechCore />
        </Float>
      </Canvas>
    </div>
  );
}
