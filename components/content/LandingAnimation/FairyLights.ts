import Phaser from "phaser";

const STEP_SECONDS = 0.5;
const PX_PER_SECOND = 20;
const VELOCITY_EASE_SECONDS = 0.4;
const ALPHA_EASE_SECONDS = 0.3;
const RISE_STEPS = 3;
const ATTRACT_PX_PER_SECOND = 12;
const MIN_ALPHA = 0.05;
const MAX_ALPHA = 0.6;

export interface Point {
  x: number;
  y: number;
}

export interface WispOptions {
  alpha: number;
  maxSteps: number;
  rises: boolean;
  radius?: number;
  intensity?: number;
  velocity?: Point;
}

export class Wisp {
  readonly light: Phaser.GameObjects.PointLight;
  private readonly maxSteps: number;
  private readonly rises: boolean;
  private vx: number;
  private vy: number;
  private momentumX = 0;
  private momentumY = 0;
  private targetAlpha: number;
  private sinceStep = 0;
  private steps = 0;

  constructor(scene: Phaser.Scene, x: number, y: number, color: number, options: WispOptions) {
    this.light = scene.add.pointlight(x, y, color, options.radius ?? 20, options.intensity ?? .2, .1);
    this.light.alpha = options.alpha;
    this.targetAlpha = options.alpha;
    this.maxSteps = options.maxSteps;
    this.rises = options.rises;
    this.vx = options.velocity?.x ?? 0;
    this.vy = options.velocity?.y ?? 0;
  }

  update(dt: number, width: number, height: number, attractor: Point | null): boolean {
    if (!this.light.active) return false;

    this.sinceStep += dt;
    while (this.sinceStep >= STEP_SECONDS) {
      this.sinceStep -= STEP_SECONDS;
      this.step(width, height);
    }

    let targetVx = this.momentumX * PX_PER_SECOND;
    let targetVy = this.momentumY * PX_PER_SECOND;
    if (attractor) {
      const dx = attractor.x - this.light.x;
      const dy = attractor.y - this.light.y;
      const distance = Math.hypot(dx, dy);
      if (distance > 1) {
        targetVx += (dx / distance) * ATTRACT_PX_PER_SECOND;
        targetVy += (dy / distance) * ATTRACT_PX_PER_SECOND;
      }
    }

    const velocityBlend = 1 - Math.exp(-dt / VELOCITY_EASE_SECONDS);
    this.vx += (targetVx - this.vx) * velocityBlend;
    this.vy += (targetVy - this.vy) * velocityBlend;
    this.light.x += this.vx * dt;
    this.light.y += this.vy * dt;

    const alphaBlend = 1 - Math.exp(-dt / ALPHA_EASE_SECONDS);
    this.light.alpha += (this.targetAlpha - this.light.alpha) * alphaBlend;

    if (this.targetAlpha <= 0 && this.light.alpha <= 0.01) {
      this.light.destroy();
      return false;
    }
    return true;
  }

  private step(width: number, height: number) {
    const bounceX = (this.light.x < width * 0.05) || (this.light.x > width * .95) ? -1 : 1;
    const bounceY = (this.light.y < height * 0.05) || (this.light.y > height * .95) ? -1 : 1;

    this.momentumX = (bounceX * this.momentumX * .6) + Math.random() * (Math.random() < 0.5 ? -1 : 1);
    this.momentumY = (bounceY * this.momentumY * .6) + Math.random() * (Math.random() < 0.5 ? -1 : 1);

    if (this.rises && this.steps < RISE_STEPS) {
      this.momentumY -= 3;
      this.targetAlpha += 0.05;
    } else if (this.steps < this.maxSteps) {
      this.targetAlpha = Phaser.Math.Clamp(this.targetAlpha + 0.05 * (Math.random() < 0.5 ? -1 : 1), MIN_ALPHA, MAX_ALPHA);
    } else {
      this.targetAlpha -= 0.05;
    }

    this.steps++;
  }
}

export function createWellFairyLight(scene: Phaser.Scene, xPos: number, yPos: number, color: number) {
  return new Wisp(scene, xPos, yPos, color, { alpha: .2, maxSteps: 100, rises: true });
}

export function createBurstFairyLight(scene: Phaser.Scene, xPos: number, yPos: number, color: number, velocity: Point) {
  return new Wisp(scene, xPos, yPos, color, { alpha: .5, maxSteps: 12, rises: false, radius: 24, intensity: .3, velocity });
}
