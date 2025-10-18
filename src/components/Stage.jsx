import React, { useMemo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  useGLTF,
} from "@react-three/drei";

function colorize(scene, materials, colors, map) {
  const mats = Object.keys(materials || {});
  const eq = (a, b) => a.trim().toLowerCase() === b.trim().toLowerCase();
  mats.forEach((name) => {
    const m = materials[name];
    if (map.byMaterial.ignore.some((n) => eq(n, name))) return;
    if (map.byMaterial.hardware.some((n) => eq(n, name))) {
      m.color?.set?.(colors.hardwareColor);
      m.metalness = 0.85;
      m.roughness = 0.25;
      return;
    }
    if (map.byMaterial.shelf.some((n) => eq(n, name))) {
      m.color?.set?.(colors.shelfColor);
      m.metalness = 0.2;
      m.roughness = 0.6;
      return;
    }
    if (map.byMaterial.body.some((n) => eq(n, name))) {
      m.color?.set?.(colors.bodyColor);
      m.metalness = 0.05;
      m.roughness = 0.9;
      return;
    }
  });
  scene.traverse((obj) => {
    if (!obj.isMesh) return;
    const nm = obj.name || "";
    if (map.byMeshHint.hardware.some((h) => nm.includes(h)))
      obj.material.color?.set?.(colors.hardwareColor);
    else if (map.byMeshHint.shelf.some((h) => nm.includes(h)))
      obj.material.color?.set?.(colors.shelfColor);
  });
}

function Model({ colors, map }) {
  const glb = useGLTF(import.meta.env.BASE_URL + "cabinet.glb", true);
  useMemo(() => {
    colorize(glb.scene, glb.materials, colors, map);
  }, [glb, colors, map]);
  return <primitive object={glb.scene} />;
}

function Fallback({ colors }) {
  return (
    <group>
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[3.6, 1.2, 1]} />
        <meshStandardMaterial color={colors.bodyColor} />
      </mesh>
    </group>
  );
}

export default function Stage({ colors, map }) {
  return (
    <div className="stage">
      <Canvas camera={{ position: [2.8, 1.9, 3.6], fov: 45 }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={<Fallback colors={colors} />}>
          {" "}
          <Model colors={colors} map={map} />{" "}
        </Suspense>
        <ContactShadows opacity={0.28} scale={8} blur={2} far={2} />
        <Environment preset="city" />
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}

useGLTF.preload(import.meta.env.BASE_URL + "cabinet.glb");
