class CubeSoundscape {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private backgroundTrack: HTMLAudioElement | null = null;
  private backgroundBuffer: AudioBuffer | null = null;
  private backgroundSource: AudioBufferSourceNode | null = null;
  private backgroundSourceGain: GainNode | null = null;
  private backgroundLoadPromise: Promise<AudioBuffer | null> | null = null;
  private backgroundStarted = false;
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

  private getBackgroundUrl(): string {
    return `${import.meta.env.BASE_URL}assets/audio/space-rumble.mp3`;
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
      await this.startBackgroundMusic();
      return true;
    })().finally(() => {
      this.unlockPromise = null;
    });

    return this.unlockPromise;
  }

  private getBackgroundTrack(): HTMLAudioElement | null {
    if (this.backgroundTrack) return this.backgroundTrack;
    if (typeof window === 'undefined') return null;

    const audio = new Audio(this.getBackgroundUrl());
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.22;
    this.backgroundTrack = audio;
    return audio;
  }

  private async loadBackgroundBuffer(): Promise<AudioBuffer | null> {
    if (this.backgroundBuffer) return this.backgroundBuffer;
    if (this.backgroundLoadPromise) return this.backgroundLoadPromise;

    const context = this.context;
    if (!context) return null;

    this.backgroundLoadPromise = (async () => {
      try {
        const response = await fetch(this.getBackgroundUrl(), { cache: 'force-cache' });
        if (!response.ok) return null;
        const buffer = await response.arrayBuffer();
        const decoded = await context.decodeAudioData(buffer.slice(0));
        this.backgroundBuffer = decoded;
        return decoded;
      } catch {
        return null;
      } finally {
        this.backgroundLoadPromise = null;
      }
    })();

    return this.backgroundLoadPromise;
  }

  private detectLoopBounds(buffer: AudioBuffer): { start: number; end: number } {
    const data = buffer.getChannelData(0);
    const sampleRate = buffer.sampleRate;
    const length = data.length;
    const maxTrimSamples = Math.min(Math.floor(sampleRate * 5), Math.floor(length * 0.4));
    const windowSize = Math.max(64, Math.floor(sampleRate * 0.015));
    const threshold = 0.0016;

    const windowEnergy = (start: number) => {
      let sum = 0;
      const end = Math.min(length, start + windowSize);
      for (let i = start; i < end; i += 1) {
        const sample = data[i];
        sum += sample * sample;
      }
      const rms = Math.sqrt(sum / Math.max(1, end - start));
      return rms;
    };

    let startSample = 0;
    for (let i = 0; i < maxTrimSamples; i += Math.max(16, Math.floor(windowSize / 4))) {
      if (windowEnergy(i) > threshold) {
        startSample = i;
        break;
      }
    }

    let endSample = length - 1;
    for (let i = length - 1; i > length - 1 - maxTrimSamples; i -= Math.max(16, Math.floor(windowSize / 4))) {
      if (windowEnergy(Math.max(0, i - windowSize)) > threshold) {
        endSample = i;
        break;
      }
    }

    const start = startSample / sampleRate;
    const end = (endSample + 1) / sampleRate;

    if (!Number.isFinite(start) || !Number.isFinite(end) || end - start < 0.5) {
      return { start: 0, end: buffer.duration };
    }

    const nudgedStart = Math.max(0, Math.min(start + 0.02, buffer.duration - 0.52));
    const nudgedEnd = Math.max(nudgedStart + 0.5, Math.min(end - 0.02, buffer.duration));

    return { start: nudgedStart, end: nudgedEnd };
  }

  private startBackgroundFromBuffer(buffer: AudioBuffer): boolean {
    const context = this.context;
    const master = this.masterGain;
    if (!context || !master) return false;

    if (this.backgroundSource) {
      try {
        this.backgroundSource.stop();
      } catch {
        // ignore stop race
      }
      this.backgroundSource = null;
    }

    const { start, end } = this.detectLoopBounds(buffer);
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    if (end - start > 0.25) {
      source.loopStart = start;
      source.loopEnd = end;
    }

    const gain = context.createGain();
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(1, context.currentTime + 0.34);

    source.connect(gain);
    gain.connect(master);

    source.onended = () => {
      if (this.backgroundSource === source) {
        this.backgroundSource = null;
        this.backgroundSourceGain = null;
        this.backgroundStarted = false;
      }
    };

    const offset = Math.min(Math.max(start, 0), Math.max(0, buffer.duration - 0.02));
    source.start(context.currentTime + 0.01, offset);
    this.backgroundSource = source;
    this.backgroundSourceGain = gain;
    this.backgroundStarted = true;
    return true;
  }

  private async startBackgroundMusic() {
    if (this.backgroundStarted) return;

    const buffer = await this.loadBackgroundBuffer();
    if (buffer && this.startBackgroundFromBuffer(buffer)) {
      return;
    }

    const track = this.getBackgroundTrack();
    if (!track) return;
    try {
      await track.play();
      this.backgroundStarted = true;
    } catch {
      // Ignore autoplay errors; next user gesture will retry via unlock().
    }
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
