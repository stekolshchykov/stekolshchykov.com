import { logRuntime } from '../observability/logger';

class CubeSoundscape {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambientBus: GainNode | null = null;
  private ambienceStarted = false;
  private pulseTimer: number | null = null;
  private pulseStep = 0;
  private autoStartInstalled = false;
  private autoStartCleanup: (() => void) | null = null;
  private unlockPromise: Promise<boolean> | null = null;

  private getContext(): AudioContext | null {
    if (this.context) return this.context;
    if (typeof window === 'undefined') return null;

    const maybeWindow = window as Window & { webkitAudioContext?: typeof AudioContext };
    const AudioContextClass = window.AudioContext || maybeWindow.webkitAudioContext;
    if (!AudioContextClass) return null;

    const context = new AudioContextClass();
    const masterGain = context.createGain();
    masterGain.gain.value = 0.22;
    masterGain.connect(context.destination);

    this.context = context;
    this.masterGain = masterGain;
    return context;
  }

  installAutoStart(): () => void {
    if (typeof window === 'undefined') return () => {};
    if (this.autoStartInstalled && this.autoStartCleanup) return this.autoStartCleanup;

    const unlock = () => {
      void this.unlock();
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      window.removeEventListener('touchstart', unlock);
      this.autoStartInstalled = false;
      this.autoStartCleanup = null;
    };

    window.addEventListener('pointerdown', unlock, { passive: true, once: true });
    window.addEventListener('keydown', unlock, { passive: true, once: true });
    window.addEventListener('touchstart', unlock, { passive: true, once: true });

    this.autoStartInstalled = true;
    this.autoStartCleanup = cleanup;
    return cleanup;
  }

  private unlock(): Promise<boolean> {
    if (this.unlockPromise) return this.unlockPromise;

    this.unlockPromise = (async () => {
      const context = this.getContext();
      if (!context || !this.masterGain) return false;

      if (context.state === 'suspended') {
        try {
          await context.resume();
        } catch {
          return false;
        }
      }

      if (!this.ambienceStarted) {
        this.startAmbient();
      }
      return true;
    })().finally(() => {
      this.unlockPromise = null;
    });

    return this.unlockPromise;
  }

  private startAmbient() {
    const context = this.context;
    const master = this.masterGain;
    if (!context || !master || this.ambienceStarted) return;

    const ambientBus = context.createGain();
    ambientBus.gain.value = 0.52;
    ambientBus.connect(master);
    this.ambientBus = ambientBus;

    const lowpass = context.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 1260;
    lowpass.Q.value = 0.82;
    lowpass.connect(ambientBus);

    const shimmer = context.createBiquadFilter();
    shimmer.type = 'highpass';
    shimmer.frequency.value = 220;
    shimmer.Q.value = 0.66;
    shimmer.connect(lowpass);

    const droneA = context.createOscillator();
    droneA.type = 'sawtooth';
    droneA.frequency.value = 52;
    const droneAGain = context.createGain();
    droneAGain.gain.value = 0.042;
    droneA.connect(droneAGain);
    droneAGain.connect(shimmer);
    droneA.start();

    const droneB = context.createOscillator();
    droneB.type = 'triangle';
    droneB.frequency.value = 77.8;
    const droneBGain = context.createGain();
    droneBGain.gain.value = 0.032;
    droneB.connect(droneBGain);
    droneBGain.connect(shimmer);
    droneB.start();

    const lfo = context.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.075;
    const lfoDepth = context.createGain();
    lfoDepth.gain.value = 470;
    lfo.connect(lfoDepth);
    lfoDepth.connect(lowpass.frequency);
    lfo.start();

    const noiseBuffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = (Math.random() * 2 - 1) * 0.26;
    }
    const noise = context.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    const noiseBand = context.createBiquadFilter();
    noiseBand.type = 'bandpass';
    noiseBand.frequency.value = 640;
    noiseBand.Q.value = 0.52;
    const noiseGain = context.createGain();
    noiseGain.gain.value = 0.036;
    noise.connect(noiseBand);
    noiseBand.connect(noiseGain);
    noiseGain.connect(ambientBus);
    noise.start();

    this.pulseTimer = window.setInterval(() => {
      this.scheduleTrancePulse();
    }, 820);

    this.ambienceStarted = true;
    logRuntime('info', 'audio', 'Soundscape started');
  }

  private scheduleTrancePulse() {
    const context = this.context;
    const ambientBus = this.ambientBus;
    if (!context || !ambientBus || context.state !== 'running') return;

    const sequence = [0, 3, 7, 10, 7, 3];
    const note = sequence[this.pulseStep % sequence.length];
    this.pulseStep += 1;
    const frequency = 110 * Math.pow(2, note / 12);
    const startAt = context.currentTime + 0.04;

    const osc = context.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(frequency, startAt);
    osc.frequency.exponentialRampToValueAtTime(frequency * 0.52, startAt + 0.42);

    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 980;
    filter.Q.value = 0.95;

    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(0.046, startAt + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.5);

    const delay = context.createDelay(0.6);
    delay.delayTime.value = 0.24;
    const feedback = context.createGain();
    feedback.gain.value = 0.22;
    delay.connect(feedback);
    feedback.connect(delay);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ambientBus);
    gain.connect(delay);
    delay.connect(ambientBus);

    osc.start(startAt);
    osc.stop(startAt + 0.56);
  }

  private playButtonSoundNow() {
    const context = this.context;
    const master = this.masterGain;
    if (!context || !master) return;

    const t = context.currentTime + 0.002;
    const osc = context.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(760, t);
    osc.frequency.exponentialRampToValueAtTime(320, t + 0.08);

    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.095, t + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);

    const filter = context.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 120;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start(t);
    osc.stop(t + 0.11);
  }

  private playRotationSoundNow() {
    const context = this.context;
    const master = this.masterGain;
    if (!context || !master) return;

    const t = context.currentTime + 0.003;
    const osc = context.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(165, t);
    osc.frequency.exponentialRampToValueAtTime(410, t + 0.17);

    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.07, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.24);

    const filter = context.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 540;
    filter.Q.value = 0.78;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start(t);
    osc.stop(t + 0.26);
  }

  playButtonSound() {
    void this.unlock().then((ready) => {
      if (!ready) return;
      this.playButtonSoundNow();
    });
  }

  playRotationSound() {
    void this.unlock().then((ready) => {
      if (!ready) return;
      this.playRotationSoundNow();
    });
  }
}

const soundscape = new CubeSoundscape();

export function installAudioAutoStart() {
  return soundscape.installAutoStart();
}

export function playButtonSound() {
  soundscape.playButtonSound();
}

export function playRotationSound() {
  soundscape.playRotationSound();
}

