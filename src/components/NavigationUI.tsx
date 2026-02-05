import { Pause, Play, Info } from 'lucide-react';
import { useState } from 'react';

interface NavigationUIProps {
  activeFace: number | null;
  setActiveFace: (face: number | null) => void;
  autoRotate: boolean;
  setAutoRotate: (rotate: boolean) => void;
}

const faceNames = ['About', 'Skills', 'Projects', 'Experience', 'Contact', 'Education'];
const faceColors = ['#7c3aed', '#2563eb', '#059669', '#dc2626', '#ea580c', '#0891b2'];

export function NavigationUI({ activeFace, setActiveFace, autoRotate, setAutoRotate }: NavigationUIProps) {
  const [showInstructions, setShowInstructions] = useState(true);

  return (
    <>
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Alex Morgan
            </h1>
            <p className="text-xl text-purple-300">Full Stack Developer Portfolio</p>
          </div>
        </div>
      </div>

      {/* Face Indicator */}
      {activeFace !== null && (
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none">
          <div
            className="px-6 py-3 rounded-full text-white font-semibold backdrop-blur-xl border-2 shadow-2xl"
            style={{
              backgroundColor: `${faceColors[activeFace]}40`,
              borderColor: faceColors[activeFace],
              boxShadow: `0 0 30px ${faceColors[activeFace]}60`,
            }}
          >
            {faceNames[activeFace]}
          </div>
        </div>
      )}

      {/* Instructions */}
      {showInstructions && (
        <div className="absolute top-32 right-6 z-10 max-w-xs pointer-events-auto">
          <div className="bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4 shadow-2xl">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Controls</h3>
              </div>
              <button
                onClick={() => setShowInstructions(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <ul className="text-sm text-slate-300 space-y-1">
              <li>🖱️ Drag to rotate cube</li>
              <li>🔍 Scroll to zoom in/out</li>
              <li>👆 Click faces to view content</li>
              <li>⏸️ Pause auto-rotation below</li>
            </ul>
          </div>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto">
        <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur-xl border border-purple-500/30 rounded-full p-3 shadow-2xl">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-all duration-300 border border-purple-500/50"
            title={autoRotate ? 'Pause Rotation' : 'Resume Rotation'}
          >
            {autoRotate ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <div className="w-px h-8 bg-slate-700"></div>

          {/* Face Quick Navigation */}
          <div className="flex gap-2">
            {faceNames.map((name, index) => (
              <button
                key={index}
                onClick={() => setActiveFace(activeFace === index ? null : index)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: activeFace === index ? `${faceColors[index]}40` : '#1e293b40',
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  borderColor: activeFace === index ? faceColors[index] : '#475569',
                  color: activeFace === index ? '#fff' : '#94a3b8',
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
        <div className="text-right text-slate-400 text-sm">
          <p>Drag • Zoom • Explore</p>
        </div>
      </div>
    </>
  );
}
