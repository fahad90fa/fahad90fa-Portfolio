import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../ThemeProvider';

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const isDarkMode = theme === 'dark';
    
    // Background color based on theme
    scene.background = new THREE.Color(
      isDarkMode ? '#0f172a' : '#f8fafc'
    );
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 500;
    
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    
    // Set colors based on theme
    const primaryColor = isDarkMode 
      ? new THREE.Color('#3b82f6') // Blue for dark mode
      : new THREE.Color('#2563eb'); // Darker blue for light mode
    
    const secondaryColor = isDarkMode
      ? new THREE.Color('#ec4899') // Pink for dark mode
      : new THREE.Color('#db2777'); // Darker pink for light mode
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position (scattered in 3D space)
      posArray[i] = (Math.random() - 0.5) * 10;
      posArray[i+1] = (Math.random() - 0.5) * 10;
      posArray[i+2] = (Math.random() - 0.5) * 10;
      
      // Color (gradient between primary and secondary)
      const mixFactor = Math.random();
      const color = new THREE.Color().lerpColors(
        primaryColor, 
        secondaryColor, 
        mixFactor
      );
      
      colorArray[i] = color.r;
      colorArray[i+1] = color.g;
      colorArray[i+2] = color.b;
    }
    
    particlesGeometry.setAttribute(
      'position', 
      new THREE.BufferAttribute(posArray, 3)
    );
    
    particlesGeometry.setAttribute(
      'color', 
      new THREE.BufferAttribute(colorArray, 3)
    );
    
    // Material for particles
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);
    
    // Mouse interaction
    const mouse = new THREE.Vector2();
    
    function onMouseMove(event: MouseEvent) {
      // Calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    
    window.addEventListener('mousemove', onMouseMove, false);
    
    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particle system slightly
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;
      
      // Make particles react to mouse movement
      particleSystem.rotation.x += mouse.y * 0.001;
      particleSystem.rotation.y += mouse.x * 0.001;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on component unmount
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      
      // Dispose of resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]); // Re-initialize when theme changes
  
  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10"
      aria-hidden="true"
    />
  );
}