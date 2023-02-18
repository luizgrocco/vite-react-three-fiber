import { useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

export const Box = (props) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    console.log(ref);
  }, []);

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerDown={() => setRotate((prev) => !prev)}
      // onPointerUp={(e) => console.log('pointer up ', e.object.name)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onUpdate={(self) => console.log(self)}>
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  );
};
