import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function MeditationRoom() {
  const mountRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(600);
  const [lightColor, setLightColor] = useState('#808080');
  const [isPulsating, setIsPulsating] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const sceneRef = useRef(null);
  const floodLightRef = useRef(null);

  const colorPresets = [
    { name: 'Green', color: '#51cf66' },
    { name: 'Red', color: '#ff6b6b' },
    { name: 'Purple', color: '#9775fa' },
    { name: 'Blue', color: '#4a90e2' },
    { name: 'Orange', color: '#ffa94d' }
  ];

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(s => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x1a1a1a);

    const camera = new THREE.PerspectiveCamera(
      95,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 0);
    camera.lookAt(0, 1.5, -8);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const floodLight = new THREE.PointLight(0x808080, 2, 25);
    floodLight.position.set(0, 4, 0);
    floodLightRef.current = floodLight;
    scene.add(floodLight);

    // Black floor
    const floorGeometry = new THREE.CircleGeometry(6, 64);
    const floorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x0a0a0a,
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    scene.add(floor);

    // Sleek walls
    const wallGeometry = new THREE.CylinderGeometry(6, 6, 5, 64, 1, true);
    const wallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2a2a2a,
      roughness: 0.3,
      metalness: 0.7,
      side: THREE.BackSide
    });
    const walls = new THREE.Mesh(wallGeometry, wallMaterial);
    walls.position.y = 2.5;
    scene.add(walls);

    // Glass ceiling
    const ceilingGeometry = new THREE.CircleGeometry(6, 64);
    const ceilingMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1a1a1a,
      roughness: 0.1,
      metalness: 0.9,
      side: THREE.BackSide
    });
    const ceiling = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 5;
    scene.add(ceiling);

    // Large glass panoramic window
    const windowGeometry = new THREE.CylinderGeometry(5.85, 5.85, 3.5, 64, 1, true, 0, Math.PI * 1.3);
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xaaccee,
      transparent: true,
      opacity: 0.15,
      roughness: 0.05,
      metalness: 0.95,
      side: THREE.DoubleSide
    });
    const window = new THREE.Mesh(windowGeometry, windowMaterial);
    window.position.y = 2.5;
    window.rotation.y = -Math.PI * 0.65;
    scene.add(window);

    // Window frame - full circles
    const frameGeometry = new THREE.TorusGeometry(5.85, 0.08, 16, 64);
    const frameMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xcccccc,
      roughness: 0.1,
      metalness: 0.95
    });
    const frameTop = new THREE.Mesh(frameGeometry, frameMaterial);
    frameTop.position.y = 4.25;
    frameTop.rotation.x = Math.PI / 2;
    scene.add(frameTop);

    const frameBottom = new THREE.Mesh(frameGeometry, frameMaterial);
    frameBottom.position.y = 0.75;
    frameBottom.rotation.x = Math.PI / 2;
    scene.add(frameBottom);

    // Vertical frame supports
    for (let i = 0; i < 4; i++) {
      const angle = (Math.PI * 1.3 / 3) * i - Math.PI * 0.65;
      const x = Math.sin(angle) * 5.85;
      const z = Math.cos(angle) * 5.85;
      
      const support = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 3.5, 16),
        frameMaterial
      );
      support.position.set(x, 2.5, z);
      scene.add(support);
    }

    // Sky
    const skyGeometry = new THREE.SphereGeometry(50, 32, 32);
    const skyMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x0a0a0a,
      side: THREE.BackSide
    });
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);

    // Distant landscape
    const horizonGeometry = new THREE.PlaneGeometry(100, 25);
    const horizonMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x0a0a0a
    });
    const horizon = new THREE.Mesh(horizonGeometry, horizonMaterial);
    horizon.position.set(0, -2, -35);
    scene.add(horizon);

    let time = 0;
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      time += 0.01;
      
      if (isPulsating && floodLightRef.current) {
        floodLightRef.current.intensity = 2 + Math.sin(time * 2) * 0.8;
      } else if (floodLightRef.current) {
        floodLightRef.current.intensity = 2;
      }

      if (isRotating) {
        scene.rotation.y += 0.002;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [isPulsating, isRotating]);

  useEffect(() => {
    if (floodLightRef.current) {
      floodLightRef.current.color.set(lightColor);
    }
  }, [lightColor]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setSeconds(600);
  };

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full" ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Timer with controls - seven segment display style */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center pointer-events-auto flex flex-col items-center gap-4">
        <div 
          className="text-9xl font-bold tracking-wider"
          style={{
            fontFamily: '"DSEG7 Classic", "Orbitron", monospace',
            color: '#ff0000',
            textShadow: '0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.5)',
            letterSpacing: '0.15em',
            fontWeight: '900',
            fontVariantNumeric: 'tabular-nums',
            WebkitFontSmoothing: 'antialiased',
            fontFeatureSettings: '"tnum"'
          }}
        >
          {formatTime(seconds)}
        </div>
        
        <div className="flex gap-6">
          <button
            onClick={handleStartStop}
            className="text-3xl transition-all hover:scale-110"
            style={{
              color: isActive ? '#888888' : '#ff0000',
              textShadow: isActive ? '0 0 10px rgba(136, 136, 136, 0.5)' : '0 0 10px rgba(255, 0, 0, 0.8)',
              background: 'none',
              border: 'none',
              padding: 0
            }}
            title={isActive ? 'Pause' : 'Start'}
          >
            ⏻
          </button>
          <button
            onClick={handleReset}
            className="text-2xl transition-all hover:scale-110"
            style={{
              color: '#ff0000',
              textShadow: '0 0 10px rgba(255, 0, 0, 0.8)',
              background: 'none',
              border: 'none',
              padding: 0
            }}
            title="Reset"
          >
            ↻
          </button>
        </div>
      </div>

      {/* Color controls on left */}
      <div className="absolute top-6 left-6 flex items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="w-10 h-10 backdrop-blur-sm rounded-full transition-all border border-white border-opacity-30"
            title="Light Colors"
            style={{ backgroundColor: lightColor, opacity: 0.7 }}
          />
          
          {showColorPicker && (
            <div className="absolute top-0 left-12 flex gap-2 bg-black bg-opacity-70 p-2 rounded-lg backdrop-blur-md">
              {colorPresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    setLightColor(preset.color);
                    setShowColorPicker(false);
                  }}
                  className="w-8 h-8 rounded-full transition-all hover:scale-110 border-2"
                  style={{ 
                    backgroundColor: preset.color,
                    opacity: 0.7,
                    borderColor: lightColor === preset.color ? 'white' : 'rgba(255, 255, 255, 0.3)',
                    boxShadow: lightColor === preset.color ? `0 0 15px ${preset.color}` : 'none'
                  }}
                  title={preset.name}
                />
              ))}
            </div>
          )}
        </div>
        
        <button
          onClick={() => setIsPulsating(!isPulsating)}
          className={`px-3 py-1.5 backdrop-blur-sm rounded-full text-white text-xs transition-all border border-white border-opacity-20 ${
            isPulsating ? 'bg-yellow-500 bg-opacity-40' : 'bg-white bg-opacity-10 hover:bg-opacity-20'
          }`}
        >
          {isPulsating ? '◉' : '○'}
        </button>
      </div>

      {/* Other controls on right */}
      <div className="absolute top-6 right-6 flex flex-col gap-3 items-end">
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`w-10 h-10 backdrop-blur-sm rounded-full text-white transition-all border border-white border-opacity-20 flex items-center justify-center text-base ${
            isRotating ? 'bg-purple-500 bg-opacity-40' : 'bg-white bg-opacity-10 hover:bg-opacity-20'
          }`}
          title="Toggle Rotation"
        >
          ⟳
        </button>
      </div>
    </div>
  );
}
