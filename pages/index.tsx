import { MainLayout } from "@/components/layout";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactElement, Suspense, useEffect, useRef } from "react";
import { Model } from "@/components/model/Avatar-3D";
import { Text } from "@/components/model/Text";
import { Bubble } from '@/components/model/Bubbles';
import { HouseHold } from '@/components/model/Household'
Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default function Home() {
  return (
    <Canvas
      camera={{ position: [2, 0.5, 12.25], fov: 15 }}
      style={{
        backgroundColor: "#111a21",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <color attach="background" args={["#f0f0f0"]} />
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={1} />
      <Suspense fallback={null}>
        {/* <Model position={[0.025, 0, 0]} /> */}
        {/* <Bubble position={[4, 2, 0]} /> */}
        <HouseHold />
      </Suspense>
      <OrbitControls
        // autoRotate
        autoRotateSpeed={0.05}
        // enableZoom={false}
        makeDefault
        // minPolarAngle={Math.PI / 1}
        // maxPolarAngle={Math.PI / 1}
      />
      <gridHelper args={[100, 10]} />
      
      {/* <Environment
        background={true}
        files={'/images/background.hdr'}
      /> */}
    </Canvas>
  );
}
