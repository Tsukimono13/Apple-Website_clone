import { PerspectiveCamera, View, OrbitControls } from "@react-three/drei";
import { Lights } from "./Lights";
import { Suspense } from "react";
import * as THREE from "three";
import IPhone from "./IPhone";
import { Loader } from "./Loader";
export const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute size-full ${index === 2 ? "-right-full" : ""}`}
    >
      <ambientLight intensity={0.5} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        rotateSpeed={0.4}
        enablePan={false}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />
      <group
        ref={groupRef}
        name={`${index === 1} ?
        "small" : "large`}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            item={item}
            size={size}
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
          />
        </Suspense>
      </group>
    </View>
  );
};
