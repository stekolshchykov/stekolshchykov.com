import { QrCode, ExternalLink, Globe } from 'lucide-react';

export function QRCard() {
  return (
    <div className="absolute bottom-8 right-8 z-20">
      <div className="bg-gradient-to-br from-slate-900/90 via-purple-900/30 to-slate-900/90 backdrop-blur-2xl border-2 border-purple-500/30 rounded-2xl p-6 shadow-2xl shadow-purple-500/20 max-w-xs">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white tracking-wide">DIGITAL CARD</h3>
            <p className="text-xs text-slate-400">Scan to visit portfolio</p>
          </div>
        </div>

        {/* QR Code Placeholder */}
        <div className="relative mb-4 group">
          <div className="w-full aspect-square bg-white rounded-xl p-4 shadow-lg">
            {/* QR Code SVG Placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-lg flex items-center justify-center relative overflow-hidden">
              <QrCode className="w-24 h-24 text-purple-400/50" />
              
              {/* Decorative QR pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full p-2 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'} rounded-sm`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20">
            <span className="text-sm text-slate-300 font-medium">Website</span>
            <a 
              href="https://alexmorgan.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm font-semibold"
            >
              alexmorgan.dev
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-500/20">
            <span className="text-sm text-slate-300 font-medium">Status</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-green-400 text-sm font-semibold">Available</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl text-white font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
          <ExternalLink className="w-4 h-4" />
          VISIT PORTFOLIO
        </button>
      </div>
    </div>
  );
}
