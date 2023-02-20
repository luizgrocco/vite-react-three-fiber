import { Stats, OrbitControls, Environment } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function App() {
  const gltf = useLoader(GLTFLoader, './models/scene.glb');

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <Environment
        files="sunflowers_puresky_1k.hdr"
        background
        ground={{ height: 10, radius: 115, scale: 100 }}
      />
      <primitive object={gltf.scene} children-0-castShadow />
      <OrbitControls target={[0, 1, 0]} autoRotate />
      <axesHelper args={[5]} />
      <Stats />
    </Canvas>
  );
}
