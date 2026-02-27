"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} scale={1.8}>
                {/* Geometri Torus Knot abstrak */}
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                {/* Wireframe tipis agar terkesan minimalis futuristik */}
                <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.1} />
            </mesh>
        </Float>
    );
}

function Particles() {
    const particlesRef = useRef<THREE.Points>(null);

    useFrame((state, delta) => {
        if (particlesRef.current) {
            // Rotasi pelan
            particlesRef.current.rotation.y -= delta * 0.05;
            particlesRef.current.rotation.x += delta * 0.02;
        }
    });

    const particlesCount = 200;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        // Rentang sebar partikel (-10 sampai 10)
        positions[i] = (Math.random() - 0.5) * 20;
    }

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            {/* Partikel debu emas (Kuning #FFD700) */}
            <pointsMaterial color="#FFD700" size={0.03} transparent opacity={0.5} sizeAttenuation />
        </points>
    );
}

export default function Minimalist3D() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 mix-blend-screen overflow-hidden">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <Particles />
                <AbstractShape />
            </Canvas>
        </div>
    );
}
