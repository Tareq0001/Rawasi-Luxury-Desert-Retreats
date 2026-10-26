/**
 * Procedural Desert & Campfire Audio Synthesizer using Web Audio API
 * Generates crackling fire pops, resonant wood warmth, and desert night breeze
 * Completely client-side, zero external audio asset dependencies!
 */
export class DesertCampfireAudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private campfireGain: GainNode | null = null;
  private windGain: GainNode | null = null;
  private fireCrackleInterval: number | null = null;
  private windNode: AudioNode | null = null;
  private mode: 'both' | 'fire' | 'wind' = 'both';

  constructor() {
    // audio context initialized on first user gesture
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      await this.start();
      return true;
    }
  }

  public async start(): Promise<void> {
    this.initContext();
    if (!this.ctx) return;

    if (this.isPlaying) return;

    // Master bus
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.45, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Campfire bus
    this.campfireGain = this.ctx.createGain();
    this.campfireGain.gain.setValueAtTime(this.mode === 'wind' ? 0 : 0.7, this.ctx.currentTime);
    this.campfireGain.connect(this.masterGain);

    // Wind bus
    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(this.mode === 'fire' ? 0 : 0.35, this.ctx.currentTime);
    this.windGain.connect(this.masterGain);

    this.startWindSynth();
    this.startCampfireSynth();
    this.isPlaying = true;
  }

  public stop(): void {
    if (!this.isPlaying || !this.ctx) return;

    if (this.fireCrackleInterval !== null) {
      window.clearInterval(this.fireCrackleInterval);
      this.fireCrackleInterval = null;
    }

    if (this.windNode) {
      try {
        (this.windNode as AudioScheduledSourceNode).stop();
      } catch {
        // ignore already stopped
      }
      this.windNode = null;
    }

    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.08);
      setTimeout(() => {
        try {
          this.masterGain?.disconnect();
        } catch {
          // ignore
        }
      }, 200);
    }

    this.isPlaying = false;
  }

  public setVolume(val: number): void {
    if (this.masterGain && this.ctx) {
      const clamped = Math.max(0, Math.min(1, val));
      this.masterGain.gain.setTargetAtTime(clamped, this.ctx.currentTime, 0.05);
    }
  }

  public setMode(mode: 'both' | 'fire' | 'wind'): void {
    this.mode = mode;
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    if (this.campfireGain) {
      this.campfireGain.gain.setTargetAtTime(mode === 'wind' ? 0 : 0.7, t, 0.1);
    }
    if (this.windGain) {
      this.windGain.gain.setTargetAtTime(mode === 'fire' ? 0 : 0.35, t, 0.1);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Procedural Desert Night Wind Breeze
   * White/Pink noise passed through a sweeping resonant bandpass filter (LFO controlled)
   */
  private startWindSynth(): void {
    if (!this.ctx || !this.windGain) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    // Generate warm pink noise
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter simulating desert wind whistling across canyons and dunes
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    // LFO for slow wind gusts
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime); // 0.18 Hz slow cycle
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);

    lfo.connect(filter.frequency);
    whiteNoise.connect(filter);
    filter.connect(this.windGain);

    whiteNoise.start();
    lfo.start();
    this.windNode = whiteNoise;
  }

  /**
   * Procedural Campfire Crackles & Wood Pops
   * Generates randomized transient bursts (crackles) and resonant wood pops
   */
  private startCampfireSynth(): void {
    if (!this.ctx || !this.campfireGain) return;

    // Continuous low fire hiss/roar
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.05;
    }
    const fireRoarSource = this.ctx.createBufferSource();
    fireRoarSource.buffer = noiseBuffer;
    fireRoarSource.loop = true;

    const fireRoarFilter = this.ctx.createBiquadFilter();
    fireRoarFilter.type = 'bandpass';
    fireRoarFilter.frequency.setValueAtTime(650, this.ctx.currentTime);
    fireRoarFilter.Q.setValueAtTime(1.2, this.ctx.currentTime);

    fireRoarSource.connect(fireRoarFilter);
    fireRoarFilter.connect(this.campfireGain);
    fireRoarSource.start();

    // Trigger randomized realistic crackle pops every 80-280ms
    const triggerPop = () => {
      if (!this.isPlaying || !this.ctx || !this.campfireGain) return;

      const isBigPop = Math.random() < 0.22;
      const t = this.ctx.currentTime;

      // Crackle click
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const popFilter = this.ctx.createBiquadFilter();

      popFilter.type = 'highpass';
      popFilter.frequency.value = isBigPop ? 800 : 2200;

      osc.type = isBigPop ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(isBigPop ? 140 : 850 + Math.random() * 600, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + (isBigPop ? 0.08 : 0.02));

      gain.gain.setValueAtTime(isBigPop ? 0.6 : 0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + (isBigPop ? 0.09 : 0.025));

      osc.connect(popFilter);
      popFilter.connect(gain);
      gain.connect(this.campfireGain);

      osc.start(t);
      osc.stop(t + (isBigPop ? 0.1 : 0.03));
    };

    this.fireCrackleInterval = window.setInterval(() => {
      if (Math.random() > 0.3) {
        triggerPop();
      }
    }, 120);
  }
}

export const desertAudio = new DesertCampfireAudio();
