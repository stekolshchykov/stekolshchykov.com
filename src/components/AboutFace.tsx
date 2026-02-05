import { User, Code2, Sparkles } from 'lucide-react';

export function AboutFace() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-white">
      <div className="mb-6 relative">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-purple-500/50">
          <User className="w-16 h-16 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-slate-800 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
        Alex Morgan
      </h2>
      
      <div className="flex items-center gap-2 mb-4 text-purple-300">
        <Code2 className="w-5 h-5" />
        <p className="text-lg">Full Stack Developer</p>
      </div>
      
      <div className="max-w-md text-center space-y-3 text-slate-300">
        <p>
          Passionate developer with 5+ years of experience building scalable web applications
          and elegant user interfaces.
        </p>
        <p>
          Specialized in React, Node.js, and cloud technologies. Love turning complex problems
          into simple, beautiful solutions.
        </p>
      </div>
      
      <div className="mt-6 flex gap-3">
        <div className="px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-500/50">
          <div className="text-2xl font-bold text-purple-300">5+</div>
          <div className="text-xs text-slate-400">Years Exp</div>
        </div>
        <div className="px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-500/50">
          <div className="text-2xl font-bold text-blue-300">50+</div>
          <div className="text-xs text-slate-400">Projects</div>
        </div>
        <div className="px-4 py-2 bg-green-500/20 rounded-lg border border-green-500/50">
          <div className="text-2xl font-bold text-green-300">30+</div>
          <div className="text-xs text-slate-400">Clients</div>
        </div>
      </div>
    </div>
  );
}
