import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Home, Layers } from 'lucide-react';

interface JoystickProps {
  onNavigate: (direction: 'up' | 'down' | 'left' | 'right' | 'front' | 'back') => void;
}

export function Joystick({ onNavigate }: JoystickProps) {
  return (
    <div className="absolute bottom-8 left-8 z-20">
      {/* Main Joystick */}
      <div className="relative">
        {/* Joystick Base with Premium Design */}
        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-950/90 backdrop-blur-2xl border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 flex items-center justify-center relative">
          
          {/* Decorative rings */}
          <div className="absolute inset-4 rounded-full border border-purple-500/10"></div>
          <div className="absolute inset-8 rounded-full border border-purple-500/5"></div>
          
          {/* Center Home Button */}
          <button
            onClick={() => onNavigate('front')}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/50 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-10 group border-2 border-purple-400/50"
            title="Home - About"
          >
            <Home className="w-6 h-6 text-white mb-0.5" />
            <span className="text-[8px] text-white/80 font-semibold tracking-wider">HOME</span>
          </button>

          {/* Up Button - Contact */}
          <button
            onClick={() => onNavigate('up')}
            className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-orange-600 hover:to-orange-700 border-2 border-orange-500/30 hover:border-orange-400/60 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl"
            title="Contact"
          >
            <ChevronUp className="w-7 h-7 text-orange-400 group-hover:text-white transition-colors" />
            <span className="text-[9px] text-orange-300 group-hover:text-white font-semibold tracking-wider mt-0.5">CONTACT</span>
          </button>

          {/* Down Button - Education */}
          <button
            onClick={() => onNavigate('down')}
            className="absolute bottom-3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-cyan-600 hover:to-cyan-700 border-2 border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl"
            title="Education"
          >
            <ChevronDown className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
            <span className="text-[9px] text-cyan-300 group-hover:text-white font-semibold tracking-wider mt-0.5">EDUCATION</span>
          </button>

          {/* Left Button - Experience */}
          <button
            onClick={() => onNavigate('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-red-600 hover:to-red-700 border-2 border-red-500/30 hover:border-red-400/60 shadow-lg shadow-red-500/10 hover:shadow-red-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl"
            title="Experience"
          >
            <ChevronLeft className="w-7 h-7 text-red-400 group-hover:text-white transition-colors" />
            <span className="text-[8px] text-red-300 group-hover:text-white font-semibold tracking-wider mt-0.5">EXPERIENCE</span>
          </button>

          {/* Right Button - Projects */}
          <button
            onClick={() => onNavigate('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/90 to-slate-800/90 hover:from-green-600 hover:to-green-700 border-2 border-green-500/30 hover:border-green-400/60 shadow-lg shadow-green-500/10 hover:shadow-green-500/30 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group backdrop-blur-xl"
            title="Projects"
          >
            <ChevronRight className="w-7 h-7 text-green-400 group-hover:text-white transition-colors" />
            <span className="text-[9px] text-green-300 group-hover:text-white font-semibold tracking-wider mt-0.5">PROJECTS</span>
          </button>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => onNavigate('front')}
          className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 hover:from-purple-500/40 hover:to-purple-600/40 border border-purple-500/50 hover:border-purple-400/70 rounded-xl text-purple-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20"
        >
          ABOUT
        </button>
        <button
          onClick={() => onNavigate('back')}
          className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-blue-600/20 hover:from-blue-500/40 hover:to-blue-600/40 border border-blue-500/50 hover:border-blue-400/70 rounded-xl text-blue-300 hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 backdrop-blur-xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          <Layers className="w-4 h-4" />
          SKILLS
        </button>
      </div>
    </div>
  );
}
