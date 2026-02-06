import * as THREE from 'three/webgpu';
import { Pane } from 'tweakpane';
import type { SingularityUniforms } from './blackHoleNode';

type BloomNodeLike = {
  threshold: { value: number };
  strength: { value: number };
  radius: { value: number };
};

export type DebugPanel = {
  pane: Pane;
  update: () => void;
  dispose: () => void;
};

export function createDebugPanel(params: {
  debugRootEl: HTMLElement;
  renderer: THREE.WebGPURenderer;
  bloom?: BloomNodeLike | null;
  uniforms: SingularityUniforms;
}): DebugPanel {
  const { debugRootEl, renderer, bloom, uniforms } = params;

  // StrictMode-safe: clear container on re-init.
  debugRootEl.innerHTML = '';

  const pane = new Pane({
    title: 'Debug',
    container: debugRootEl,
    expanded: false,
  });

  const ui = {
    visible: true,
    toneMapping: renderer.toneMapping,
    exposure: renderer.toneMappingExposure,
    bloomStrength: bloom?.strength.value ?? 0.217,
    bloomRadius: bloom?.radius.value ?? 0.0,
    bloomThreshold: bloom?.threshold.value ?? 0.0,

    iterations: uniforms.iterations.value,
    stepSize: uniforms.stepSize.value,
    noiseFactor: uniforms.noiseFactor.value,
    power: uniforms.power.value,
    clamp1: uniforms.clamp1.value,
    clamp2: uniforms.clamp2.value,
    originRadius: uniforms.originRadius.value,
    width: uniforms.width.value,
    uvMotion: uniforms.uvMotion.value,

    rampCol1: `#${uniforms.rampCol1.value.getHexString()}`,
    rampPos1: uniforms.rampPos1.value,
    rampCol2: `#${uniforms.rampCol2.value.getHexString()}`,
    rampPos2: uniforms.rampPos2.value,
    rampCol3: `#${uniforms.rampCol3.value.getHexString()}`,
    rampPos3: uniforms.rampPos3.value,
    rampEmission: uniforms.rampEmission.value,
    emissionColor: `#${uniforms.emissionColor.value.getHexString()}`,

    backgroundIntensity: uniforms.backgroundIntensity.value,
  };

  pane.addBinding(ui, 'visible', { label: 'UI Visible' }).on('change', (ev) => {
    ui.visible = Boolean(ev.value);
    debugRootEl.style.display = ui.visible ? 'block' : 'none';
  });

  const rendererFolder = pane.addFolder({ title: 'Renderer', expanded: false });
  rendererFolder
    .addBinding(ui, 'toneMapping', {
      label: 'Tone Mapping',
      options: {
        No: THREE.NoToneMapping,
        Linear: THREE.LinearToneMapping,
        Reinhard: THREE.ReinhardToneMapping,
        Cineon: THREE.CineonToneMapping,
        ACESFilmic: THREE.ACESFilmicToneMapping,
        AgX: THREE.AgXToneMapping,
        Neutral: THREE.NeutralToneMapping,
      },
    })
    .on('change', (ev) => {
      renderer.toneMapping = ev.value;
    });

  rendererFolder
    .addBinding(ui, 'exposure', { label: 'Exposure', min: 0, max: 2, step: 0.01 })
    .on('change', (ev) => {
      renderer.toneMappingExposure = ev.value;
    });

  const bloomFolder = pane.addFolder({ title: 'Bloom', expanded: false });
  bloomFolder.addBinding(ui, 'bloomStrength', { label: 'Strength', min: 0, max: 5, step: 0.001 }).on('change', (ev) => {
    if (bloom) bloom.strength.value = ev.value;
  });
  bloomFolder.addBinding(ui, 'bloomRadius', { label: 'Radius', min: -2, max: 1, step: 0.001 }).on('change', (ev) => {
    if (bloom) bloom.radius.value = ev.value;
  });
  bloomFolder.addBinding(ui, 'bloomThreshold', { label: 'Threshold', min: 0, max: 1, step: 0.001 }).on('change', (ev) => {
    if (bloom) bloom.threshold.value = ev.value;
  });

  const bhFolder = pane.addFolder({ title: 'Black Hole', expanded: false });
  bhFolder.addBinding(ui, 'iterations', { min: 16, max: 256, step: 1, label: 'Iterations' }).on('change', (ev) => {
    uniforms.iterations.value = ev.value;
  });
  bhFolder.addBinding(ui, 'stepSize', { min: 0.001, max: 0.02, step: 0.0001, label: 'Step Size' }).on('change', (ev) => {
    uniforms.stepSize.value = ev.value;
  });
  bhFolder.addBinding(ui, 'noiseFactor', { min: 0, max: 0.1, step: 0.0001, label: 'Noise Factor' }).on('change', (ev) => {
    uniforms.noiseFactor.value = ev.value;
  });
  bhFolder.addBinding(ui, 'power', { min: 0, max: 1.5, step: 0.001, label: 'Power' }).on('change', (ev) => {
    uniforms.power.value = ev.value;
  });
  bhFolder.addBinding(ui, 'clamp1', { min: 0, max: 2, step: 0.001, label: 'Clamp 1' }).on('change', (ev) => {
    uniforms.clamp1.value = ev.value;
  });
  bhFolder.addBinding(ui, 'clamp2', { min: 0, max: 2, step: 0.001, label: 'Clamp 2' }).on('change', (ev) => {
    uniforms.clamp2.value = ev.value;
  });
  bhFolder.addBinding(ui, 'originRadius', { min: 0.02, max: 0.35, step: 0.001, label: 'Origin Radius' }).on('change', (ev) => {
    uniforms.originRadius.value = ev.value;
  });
  bhFolder.addBinding(ui, 'width', { min: 0.005, max: 0.15, step: 0.001, label: 'Width' }).on('change', (ev) => {
    uniforms.width.value = ev.value;
  });
  bhFolder.addBinding(ui, 'uvMotion', { min: -5, max: 5, step: 0.001, label: 'UV Motion' }).on('change', (ev) => {
    uniforms.uvMotion.value = ev.value;
  });

  const appearanceFolder = pane.addFolder({ title: 'Appearance', expanded: false });
  appearanceFolder.addBinding(ui, 'rampCol1', { label: 'Ramp 1' }).on('change', (ev) => {
    uniforms.rampCol1.value.set(ev.value);
  });
  appearanceFolder.addBinding(ui, 'rampPos1', { label: 'Pos 1', min: 0, max: 1, step: 0.001 }).on('change', (ev) => {
    uniforms.rampPos1.value = ev.value;
  });
  appearanceFolder.addBinding(ui, 'rampCol2', { label: 'Ramp 2' }).on('change', (ev) => {
    uniforms.rampCol2.value.set(ev.value);
  });
  appearanceFolder.addBinding(ui, 'rampPos2', { label: 'Pos 2', min: 0, max: 1, step: 0.001 }).on('change', (ev) => {
    uniforms.rampPos2.value = ev.value;
  });
  appearanceFolder.addBinding(ui, 'rampCol3', { label: 'Ramp 3' }).on('change', (ev) => {
    uniforms.rampCol3.value.set(ev.value);
  });
  appearanceFolder.addBinding(ui, 'rampPos3', { label: 'Pos 3', min: 0, max: 1, step: 0.001 }).on('change', (ev) => {
    uniforms.rampPos3.value = ev.value;
  });
  appearanceFolder.addBinding(ui, 'rampEmission', { label: 'Emission', min: 0, max: 8, step: 0.001 }).on('change', (ev) => {
    uniforms.rampEmission.value = ev.value;
  });
  appearanceFolder.addBinding(ui, 'emissionColor', { label: 'Emissive Tint' }).on('change', (ev) => {
    uniforms.emissionColor.value.set(ev.value);
  });

  const bgFolder = pane.addFolder({ title: 'Background', expanded: false });
  bgFolder.addBinding(ui, 'backgroundIntensity', { label: 'Intensity', min: 0, max: 6, step: 0.01 }).on('change', (ev) => {
    uniforms.backgroundIntensity.value = ev.value;
  });

  return {
    pane,
    update: () => {},
    dispose: () => {
      pane.dispose();
    },
  };
}
