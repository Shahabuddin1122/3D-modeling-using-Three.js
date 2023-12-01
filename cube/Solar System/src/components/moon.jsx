import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Clock } from "three"
const Moon = () => {
    const moonRef = useRef()

    const [moonTexture] = useTexture([
        '/assets/2k_moon.jpg'
    ])
    useFrame(({clock})=>{
        moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) *4;
        moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) *4;
        moonRef.current.rotation.y += 0.001;
    });
    return (
        <>
            <mesh castShadow receiveShadow ref={moonRef} position={[4,0,0]}>
                <sphereGeometry args={[0.5,32,32]}/>
                <meshPhongMaterial 
                    map={moonTexture} 
                />
            </mesh>
        </>
    )
}
export default Moon