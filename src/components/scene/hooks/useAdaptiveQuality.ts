import { useMemo, useRef, useState } from 'react';

export type QualityTier = 'ultra' | 'high' | 'medium' | 'low';

export interface QualityPreset {
  pixelRatioScale: number;
  starDensity: number;
  starTwinkle: number;
  blackHoleDetail: number;
  motionScale: number;
}

const TIER_ORDER: QualityTier[] = ['ultra', 'high', 'medium', 'low'];

const QUALITY_PRESETS: Record<QualityTier, QualityPreset> = {
  ultra: {
    pixelRatioScale: 1,
    starDensity: 1,
    starTwinkle: 1,
    blackHoleDetail: 1,
    motionScale: 1,
  },
  high: {
    pixelRatioScale: 0.9,
    starDensity: 0.86,
    starTwinkle: 0.88,
    blackHoleDetail: 0.86,
    motionScale: 0.92,
  },
  medium: {
    pixelRatioScale: 0.78,
    starDensity: 0.7,
    starTwinkle: 0.72,
    blackHoleDetail: 0.68,
    motionScale: 0.82,
  },
  low: {
    pixelRatioScale: 0.66,
    starDensity: 0.54,
    starTwinkle: 0.58,
    blackHoleDetail: 0.52,
    motionScale: 0.72,
  },
};

function shiftTier(current: QualityTier, direction: 1 | -1): QualityTier {
  const index = TIER_ORDER.indexOf(current);
  if (index === -1) return current;
  const nextIndex = Math.max(0, Math.min(TIER_ORDER.length - 1, index + direction));
  return TIER_ORDER[nextIndex];
}

interface AdaptiveQualityConfig {
  enabled: boolean;
  lowPowerMode: boolean;
  targetFPS: number;
}

export function useAdaptiveQuality({ enabled, lowPowerMode, targetFPS }: AdaptiveQualityConfig) {
  const [qualityTier, setQualityTier] = useState<QualityTier>(lowPowerMode ? 'medium' : 'ultra');
  const fpsEmaRef = useRef(targetFPS);
  const lowFpsBudgetRef = useRef(0);
  const highFpsBudgetRef = useRef(0);

  const qualityPreset = useMemo(() => QUALITY_PRESETS[qualityTier], [qualityTier]);

  const reportFrame = (deltaSeconds: number) => {
    if (!enabled || !Number.isFinite(deltaSeconds) || deltaSeconds <= 0) return;

    const fps = 1 / deltaSeconds;
    const alpha = 0.1;
    fpsEmaRef.current = fpsEmaRef.current * (1 - alpha) + fps * alpha;

    const lowFpsThreshold = targetFPS * (lowPowerMode ? 0.74 : 0.72);
    const highFpsThreshold = targetFPS * (lowPowerMode ? 0.9 : 0.94);

    if (fpsEmaRef.current < lowFpsThreshold) {
      lowFpsBudgetRef.current += deltaSeconds;
      highFpsBudgetRef.current = Math.max(0, highFpsBudgetRef.current - deltaSeconds * 0.5);
    } else if (fpsEmaRef.current > highFpsThreshold) {
      highFpsBudgetRef.current += deltaSeconds;
      lowFpsBudgetRef.current = Math.max(0, lowFpsBudgetRef.current - deltaSeconds * 0.5);
    } else {
      lowFpsBudgetRef.current = Math.max(0, lowFpsBudgetRef.current - deltaSeconds * 0.6);
      highFpsBudgetRef.current = Math.max(0, highFpsBudgetRef.current - deltaSeconds * 0.6);
    }

    if (lowFpsBudgetRef.current >= 2.5) {
      lowFpsBudgetRef.current = 0;
      highFpsBudgetRef.current = 0;
      setQualityTier((prev) => shiftTier(prev, 1));
      return;
    }

    if (highFpsBudgetRef.current >= 8) {
      highFpsBudgetRef.current = 0;
      lowFpsBudgetRef.current = 0;
      setQualityTier((prev) => shiftTier(prev, -1));
    }
  };

  return {
    qualityTier,
    qualityPreset,
    fpsEstimateRef: fpsEmaRef,
    reportFrame,
  };
}
