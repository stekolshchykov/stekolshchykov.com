import { useState } from 'react';
import { Scene3D } from './components/Scene3D';
import { Joystick } from './components/Joystick';
import { LoadingScreen } from './components/LoadingScreen';
import { QRCard } from './components/QRCard';

export default function App() {
  const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

  const rotateCube = (direction: 'up' | 'down' | 'left' | 'right' | 'front' | 'back') => {
    const speed = Math.PI / 2;
    
    switch (direction) {
      case 'up':
        setTargetRotation(prev => ({ x: Math.max(prev.x - speed, -Math.PI / 2), y: prev.y }));
        break;
      case 'down':
        setTargetRotation(prev => ({ x: Math.min(prev.x + speed, Math.PI / 2), y: prev.y }));
        break;
      case 'left':
        setTargetRotation(prev => ({ ...prev, y: prev.y + speed }));
        break;
      case 'right':
        setTargetRotation(prev => ({ ...prev, y: prev.y - speed }));
        break;
      case 'front':
        setTargetRotation({ x: 0, y: 0 });
        break;
      case 'back':
        setTargetRotation({ x: 0, y: Math.PI });
        break;
    }
  };

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <LoadingScreen />
      
      <Scene3D targetRotation={targetRotation} />

      {/* Elegant Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-8 pointer-events-none">
        <div className="text-center">
          <div className="inline-block">
            <h1 className="text-6xl font-bold text-white mb-2 tracking-wider">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                ALEX MORGAN
              </span>
            </h1>
            <div className="h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 mt-4 font-light tracking-widest">
            FULL STACK DEVELOPER
          </p>
        </div>
      </div>

      {/* Joystick Control */}
      <Joystick onNavigate={rotateCube} />

      {/* QR Card */}
      <QRCard />

      {/* Instructions */}
      <div className="absolute top-8 right-8 z-10 max-w-sm pointer-events-auto">
        <div className="bg-gradient-to-br from-slate-900/70 via-purple-900/30 to-slate-900/70 backdrop-blur-2xl border border-purple-500/20 rounded-2xl p-6 shadow-2xl shadow-purple-500/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <h3 className="font-semibold text-white tracking-wide">NAVIGATION</h3>
          </div>
          <ul className="text-sm text-slate-300 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-purple-400">◆</span>
              <span>Use joystick to rotate the cube</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">◆</span>
              <span>Drag with mouse for free rotation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">◆</span>
              <span>Scroll to zoom in/out</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-400">◆</span>
              <span>Each face contains portfolio section</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ambient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] rounded-full"></div>
      </div>
    </div>
  );
}
