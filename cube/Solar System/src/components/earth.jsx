import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Moon from "./moon"
import ISS from "./ISS"
import Sun from "./sun"
import * as THREE from "three"
const Earth = ({a}) => {
    const earthRef = useRef()
    const earthPositionRef = useRef(new THREE.Vector3(8,0,0))

    const [earthTexture,earthNormalMap,earthSpecular,earthdisplacementMap] = useTexture([
        '/assets/2k_earth_daymap.jpg',
        '/assets/2k_earth_normal_map.jpg',
        '/assets/2k_earth_specular_map.jpg',
        '/assets/EarthDisplacementMap.jpg'
    ])
    useFrame(({clock})=>{
        const angle = clock.getElapsedTime() * 0.5
        const distance = 8;
        const x = Math.sin(angle) * distance
        const z = Math.cos(angle) * distance
        earthRef.current.position.set(x,0,z)
        earthRef.current.rotation.y += 0.001;
        earthPositionRef.current = earthRef.current.position
    });
    return (
        <>
            <group position={[8,0,0]} ref={earthRef} >
            <mesh  castShadow receiveShadow position={[0,0,0]}>
                <sphereGeometry args={[1,32,32]}/>
                <meshPhongMaterial 
                    map={earthTexture} 
                    normalMap={earthNormalMap} 
                    specularMap={earthSpecular}
                    displacementMap={earthdisplacementMap}
                    displacementScale={0.1}
                />
            </mesh>
            <ISS/>
            <Moon/>
            
            </group>
        </>
    )
}
export default Earth