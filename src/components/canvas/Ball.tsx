import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props: { imgUrl: string }) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.75} rotationIntensity={1.6} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0.15, 0.12]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[0.93, 30, 30]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-2}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.87}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 3]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
