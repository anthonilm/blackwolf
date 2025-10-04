// app/components/HeavenlyBackground.tsx
"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeavenlyBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    renderer.toneMapping = THREE.NoToneMapping;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    loader.load("/image.png", (texture) => {
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.minFilter = THREE.LinearFilter;

      const geometry = new THREE.PlaneGeometry(16, 9, 64, 64);

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uTexture: { value: texture },
        },
        vertexShader: `
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            vUv = uv;

            // add soft wave motion to geometry vertices
            vec3 pos = position;
            pos.z += 0.15 * sin(uv.x * 6.0 + uTime * 0.4);
            pos.z += 0.1 * cos(uv.y * 6.0 + uTime * 0.35);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform float uTime;
          uniform sampler2D uTexture;
          varying vec2 vUv;

          void main() {
            vec2 uv = vUv;

            // subtle flowing distortion (like water current)
            uv.x += 0.015 * sin(uTime * 0.4 + uv.y * 5.0);
            uv.y += 0.015 * cos(uTime * 0.3 + uv.x * 5.0);

            vec4 color = texture2D(uTexture, uv);

            // brighten slightly to ensure clarity
            color.rgb = mix(color.rgb, vec3(1.0), 0.18);

            gl_FragColor = vec4(color.rgb, 1.0); // full visibility
          }
        `,
        transparent: true,
      });

      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      camera.position.z = 5;

      const clock = new THREE.Clock();
      const animate = () => {
        requestAnimationFrame(animate);
        material.uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
      };
      animate();
    });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
