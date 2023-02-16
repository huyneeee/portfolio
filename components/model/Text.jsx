import React from "react";
import { extend } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
extend({ TextGeometry })

export const Text = (props) => {
  return (
    <mesh {...props}>
      <textGeometry
        attach="geometry"
        args={[
          "three.js",
          {
            size: 1,
          },
        ]}
      />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
};
