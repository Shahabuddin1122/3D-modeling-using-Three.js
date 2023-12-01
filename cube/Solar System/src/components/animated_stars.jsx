import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
 const animated_stars = ()=>{
    const ref = useRef();
    useFrame(()=>{
        ref.current.rotation.x += 0.0001;
        ref.current.rotation.y += 0.0001;
        ref.current.rotation.z += 0.0001;
    })
    return (
        <Stars ref={ref}/>
    )
 }
 export default animated_stars;