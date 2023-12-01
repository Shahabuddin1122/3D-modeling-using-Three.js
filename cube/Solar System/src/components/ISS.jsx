import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo,useRef } from "react";

const ISS = ()=>{
    const ISSRef = useRef();
    const memoizedISS = useMemo(()=>{
        return useGLTF('/ISS/ISS_stationary.gltf')
    })
    useFrame(({clock})=>{
        ISSRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) *2;
        ISSRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) *2;
    });
    return (
        <>
            <mesh ref={ISSRef} >
                <primitive  object={memoizedISS.scene} position={[0,0,0]} scale={0.005}/>
            </mesh>
        </>
    )
}
export default ISS;