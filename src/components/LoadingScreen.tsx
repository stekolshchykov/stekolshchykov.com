import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-16 h-16 text-purple-500 animate-spin mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
        <p className="text-purple-300">Initializing 3D space...</p>
      </div>
    </div>
  );
}
