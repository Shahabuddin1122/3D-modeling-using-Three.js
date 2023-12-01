
import { useRef } from "react";
import {  OrbitControls,useHelper } from "@react-three/drei";
import Animated_stars from "./components/animated_stars"
import './star.css';
import Earth from "./components/earth.jsx"
import Sun from "./components/sun.jsx";
import * as THREE from "three"
const Star = () => {
    const directionRef = useRef();
    const directionRef2 = useRef();
    useHelper(directionRef,THREE.DirectionalLightHelper,1,'hotpink')
    useHelper(directionRef2,THREE.DirectionalLightHelper,1,'hotpink')
    return (
        <>
            <color attach="background" args={['black']} />
            <Animated_stars/>
            <OrbitControls />
            <directionalLight castShadow ref={directionRef} position={[0,0,-10]} intensity={3}/> 
            <directionalLight castShadow ref={directionRef2} position={[0,0,10]} intensity={3}/>  
            
            <Sun/>
            <Earth/>
   
        </>
    );
};

export default Star;
