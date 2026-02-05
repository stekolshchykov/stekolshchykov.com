class CubeSoundscape {
  private context: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private backgroundTrack: HTMLAudioElement | null = null;
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

    const audio = new Audio(`${import.meta.env.BASE_URL}assets/audio/space-rumble.mp3`);
    audio.preload = 'auto';
    audio.loop = true;
    audio.volume = 0.22;
    this.backgroundTrack = audio;
    return audio;
  }

  private async startBackgroundMusic() {
    if (this.backgroundStarted) return;
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
