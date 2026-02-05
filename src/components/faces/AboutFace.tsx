import { User, Code2, Sparkles, MapPin, Award, Zap } from 'lucide-react';

export function AboutFace() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white px-8">
      {/* Title Badge */}
      <div className="mb-8">
        <div className="inline-block px-6 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full backdrop-blur-xl">
          <span className="text-purple-300 text-sm font-semibold tracking-widest">ABOUT ME</span>
        </div>
      </div>

      <div className="mb-6 relative">
        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-600 via-purple-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-purple-500/50 rotate-6 hover:rotate-0 transition-transform duration-500">
          <User className="w-16 h-16 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 bg-gradient-to-br from-green-400 to-green-600 w-10 h-10 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-lg shadow-green-500/50 animate-pulse">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <h2 className="text-5xl font-bold mb-3 tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Alex Morgan
        </span>
      </h2>
      
      <div className="flex items-center gap-3 mb-2 px-6 py-2 bg-purple-500/10 rounded-full border border-purple-500/30">
        <Code2 className="w-5 h-5 text-purple-400" />
        <p className="text-lg text-purple-200 font-medium tracking-wide">Full Stack Developer</p>
      </div>

      <div className="flex items-center gap-2 text-slate-400 mb-8">
        <MapPin className="w-4 h-4" />
        <span className="text-sm">San Francisco, CA</span>
      </div>
      
      <div className="text-center space-y-4 text-slate-300 max-w-2xl mb-8 leading-relaxed">
        <p className="text-base">
          Passionate developer with <span className="text-purple-400 font-semibold">5+ years of experience</span> building 
          scalable web applications and elegant user interfaces that users love.
        </p>
        <p className="text-base">
          Specialized in <span className="text-blue-400 font-semibold">React, Node.js, and cloud technologies</span>. 
          Love turning complex problems into simple, beautiful, and performant solutions.
        </p>
      </div>
      
      <div className="flex gap-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-xl group-hover:bg-purple-500/30 transition-all"></div>
          <div className="relative px-6 py-4 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl border border-purple-500/40 backdrop-blur-xl">
            <div className="text-3xl font-bold text-purple-300 mb-1">5+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Years Exp</div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-xl group-hover:bg-blue-500/30 transition-all"></div>
          <div className="relative px-6 py-4 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/40 backdrop-blur-xl">
            <div className="text-3xl font-bold text-blue-300 mb-1">50+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Projects</div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-xl group-hover:bg-green-500/30 transition-all"></div>
          <div className="relative px-6 py-4 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl border border-green-500/40 backdrop-blur-xl">
            <div className="text-3xl font-bold text-green-300 mb-1">30+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">Clients</div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="mt-8 flex gap-3">
        <div className="px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center gap-2">
          <Award className="w-4 h-4 text-orange-400" />
          <span className="text-xs text-orange-300 font-semibold">Award Winner</span>
        </div>
        <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-cyan-300 font-semibold">Fast Learner</span>
        </div>
      </div>
    </div>
  );
}
