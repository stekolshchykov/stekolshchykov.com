import { ReactNode } from 'react';

interface CubeFaceProps {
  position: 'front' | 'back' | 'right' | 'left' | 'top' | 'bottom';
  children: ReactNode;
}

const positionStyles: Record<string, string> = {
  front: 'rotateY(0deg) translateZ(250px)',
  back: 'rotateY(180deg) translateZ(250px)',
  right: 'rotateY(90deg) translateZ(250px)',
  left: 'rotateY(-90deg) translateZ(250px)',
  top: 'rotateX(90deg) translateZ(250px)',
  bottom: 'rotateX(-90deg) translateZ(250px)',
};

const mobilePositionStyles: Record<string, string> = {
  front: 'rotateY(0deg) translateZ(175px)',
  back: 'rotateY(180deg) translateZ(175px)',
  right: 'rotateY(90deg) translateZ(175px)',
  left: 'rotateY(-90deg) translateZ(175px)',
  top: 'rotateX(90deg) translateZ(175px)',
  bottom: 'rotateX(-90deg) translateZ(175px)',
};

export function CubeFace({ position, children }: CubeFaceProps) {
  return (
    <>
      <div
        className="cube-face hidden sm:block"
        style={{
          transform: positionStyles[position],
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl overflow-auto p-8">
          {children}
        </div>
      </div>
      
      <div
        className="cube-face block sm:hidden"
        style={{
          transform: mobilePositionStyles[position],
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-purple-500/30 shadow-2xl overflow-auto p-6">
          {children}
        </div>
      </div>

      <style>{`
        .cube-face {
          position: absolute;
          width: 500px;
          height: 500px;
          backface-visibility: hidden;
        }

        @media (max-width: 640px) {
          .cube-face {
            width: 350px;
            height: 350px;
          }
        }
      `}</style>
    </>
  );
}
