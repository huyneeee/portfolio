import React from "react";

export const Circle = () => {
  return (
    <mesh castShadow receiveShadow position={[1.75, 0.25, 1]} scale={0.75}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};
