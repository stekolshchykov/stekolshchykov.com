/**
 * Default configuration + localStorage persistence for the WebGPU black hole demo.
 *
 * Ported from https://github.com/dgreenheck/webgpu-black-hole (MIT).
 */

const STORAGE_KEY = 'blackhole-simulation-config';

const COLOR_PROPERTIES = ['starBackgroundColor', 'nebula1Color', 'nebula2Color'] as const;

type ColorPropertyKey = (typeof COLOR_PROPERTIES)[number];

type TweakpaneColorObject = {
  r?: number;
  g?: number;
  b?: number;
};

function normalizeColorToHex(value: unknown): string {
  if (typeof value === 'string') return value;

  if (value && typeof value === 'object') {
    const maybe = value as TweakpaneColorObject;
    const r = Math.round(maybe.r ?? 0);
    const g = Math.round(maybe.g ?? 0);
    const b = Math.round(maybe.b ?? 0);

    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b
      .toString(16)
      .padStart(2, '0')}`;
  }

  return '#000000';
}

export const DEFAULT_CONFIG = {
  "blackHoleMass": 0.4,
  "diskInnerRadius": 4.1,
  "diskOuterRadius": 14.5,
  "diskTemperature": 49.78,
  "temperatureFalloff": 5.22,
  "diskBrightness": 5,
  "diskRotationSpeed": -8.7,
  "turbulenceScale": 1.81,
  "turbulenceStretch": 0.75,
  "turbulenceSharpness": 7.4,
  "turbulenceCycleTime": 5,
  "turbulenceLacunarity": 3,
  "turbulencePersistence": 0.8,
  "diskEdgeSoftnessInner": 0.18,
  "diskEdgeSoftnessOuter": 0.5,
  "gravitationalLensing": 2.4,
  "dopplerStrength": 1.0,
  "stepSize": 1,
  "metricType": 0,
  "bhSpin": 0.0,
  "diskInclination": 0.0,
  "accretionRate": 1.0,
  "diskEmissionScale": 1.0,
  "exposure": 1.0,
  "baseStep": 1.0,
  "maxSteps": 68,
  "adaptiveEps": 0.08,
  "maxDistance": 500,
  "internalScale": 1.0,
  "taaEnabled": false,
  "taaFrames": 8,
  "jitterSeed": 1,
  "starsEnabled": true,
  "starBackgroundColor": "#000000",
  "starDensity": 0.1,
  "starSize": 1.2,
  "starBrightness": 0.1,
  "nebulaEnabled": true,
  "nebula1Scale": 2,
  "nebula1Density": 0.5,
  "nebula1Brightness": 0.01,
  "nebula1Color": "#071f44",
  "nebula2Scale": 5.5,
  "nebula2Density": 0.05,
  "nebula2Brightness": 0.21,
  "nebula2Color": "#010615",
  "bloomStrength": 0.68,
  "bloomRadius": 0.2,
  "bloomThreshold": 0.4,
  "turbulenceBrightness": -0.05,
  "diskDensity": 1,
  "qualityPreset": "medium",
  "diskInnerThickness": 0.7,
  "diskOuterThickness": 0.5,
  "ringEnabled": true,
  "ringScale": 0.83,
  "ringContrast": 0.95,
  "ringBrightness": 0.4,
  "ringSharpness": 10,
  "ringTwist": 10.3,
  "noiseAnimFrequency": 4.2,
  "noiseAnimAmplitude": 2,
  "diskRadialFalloff": 2,
  "diskOpacityFalloff": 0.5,
  "adaptiveMinStep": 0.15,
  "stepJitter": 0,
  "diskInnerColor": "#a84b23",
  "diskOuterColor": "#7f1b00",
  "nebulaBrightness": 0.07,
  "nebulaColor1": "#113844",
  "nebulaColor2": "#1b214a",
  "nebulaScale1": 3,
  "nebulaScale2": 3.5,
  "nebulaBlend": 0.55,
  "nebulaSpeed": 0.065,
  "nebulaDensity": 0.35,
  "diskDifferentialRotation": 1,
  "noiseEvolutionSpeed": 5,
  "raySteps": 68,
  "nebulaScale": 3,
  "nebulaDetailScale": 2.4,
  "nebulaOffsetX": 0,
  "nebulaOffsetY": 0,
  "nebulaOffsetZ": 0,
  "diskTurbulence": 0.9,
  "turbulencePrimaryScale": 0.65,
  "turbulenceSecondaryScale": 1.3,
  "turbulenceSecondaryStrength": 0.15,
  "turbulenceOffset": 0.1,
  "ringNoiseEnabled": true,
  "ringNoiseScale": 4.5,
  "ringNoiseAmplitude": 1.45,
  "ringNoiseSharpness": 4,
  "ringNoiseOffset": -0.2,
  "ringNoiseOctaves": 2,
  "ringNoiseLacunarity": 1.9,
  "ringNoisePersistence": 0.45,
  "maxRayDistance": 500,
  "diskThickness": 1.3,
  "heightDensityFalloff": 5,
  "rayJitter": 1,
  "temporalAA": false,
  "temporalFrames": 16,
  // Dust system defaults
  "dustEnabled": true,
  "dustCount": 2200,
  // Spawn as a thin outer continuation of the accretion disk (outside the bright ring).
  "dustInnerRadius": 15.3,
  "dustOuterRadius": 21.0,
  // Tight vertical thickness; looks like a razor-thin ring instead of a thick band.
  "dustThickness": 0.18,
  "dustSpawnJitter": 0.03,
  "dustDrag": 0.18,
  "dustPlaneStiffness": 2.2,
  "dustRadialDamping": 1.6,
  "dustMinSpeed": 0.6,
  "dustMaxSpeed": 3.2,
  "dustGravityMultiplier": 1.0,
  // These are only used for falloff/scaling; keep them aligned to the ring.
  "dustRespawnInner": 15.0,
  "dustRespawnOuter": 21.8,
  "dustSizeMin": 0.008,
  "dustSizeMax": 0.028,
  "dustDensity": 950,
  "dustBrightFactor": 0.9,
  "dustSwirl": 0.01,
  "dustLensStrength": 0.15,
  "dustRedshiftScale": 0.2,
  "dustStreakScale": 0.7,
  "dustOrbitBlend": 0.25
} as const;

type WidenLiteral<T> = T extends number
  ? number
  : T extends boolean
    ? boolean
    : T extends string
      ? string
      : T;

export type BlackHoleConfig = {
  [K in keyof typeof DEFAULT_CONFIG]: WidenLiteral<(typeof DEFAULT_CONFIG)[K]>;
};

export const defaultConfig: BlackHoleConfig = { ...DEFAULT_CONFIG };

export function loadConfig(defaults: BlackHoleConfig): BlackHoleConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { ...defaults };

    const parsed = JSON.parse(saved) as Record<string, unknown>;

    // Normalize any color properties that may have been saved as objects.
    for (const key of COLOR_PROPERTIES) {
      if (parsed[key] !== undefined) {
        parsed[key] = normalizeColorToHex(parsed[key]);
      }
    }

    return { ...defaults, ...(parsed as Partial<BlackHoleConfig>) };
  } catch (e) {
    console.warn('Failed to load config from localStorage:', e);
    return { ...defaults };
  }
}

export function saveConfig(config: BlackHoleConfig): void {
  try {
    const normalized: Record<string, unknown> = { ...config };

    for (const key of COLOR_PROPERTIES) {
      const value = normalized[key] as unknown;
      if (value !== undefined) {
        normalized[key] = normalizeColorToHex(value);
      }
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  } catch (e) {
    console.warn('Failed to save config to localStorage:', e);
  }
}

export function clearConfig(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear config from localStorage:', e);
  }
}

export function getColorPropertyKeys(): readonly ColorPropertyKey[] {
  return COLOR_PROPERTIES;
}
