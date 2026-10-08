import Phaser from "phaser";
import { createBurstFairyLight, createWellFairyLight, Point, Wisp } from "./FairyLights";
import { default as EC } from "./EngineConstants";

export const CAVE_READY_EVENT = "cave-ready";

const TEXTURE_WIDTHS = [1080, 1200, 1920, 2048, 3840];

const POINTER_COLOR = 0xffe7a8;
const WISP_COLOR = 0xffffff;
const MAX_WISPS = 40;
const BURST_SIZE = 4;

const DIM_SECONDS = 0.6;
const IGNITE_SECONDS = 1.5;
const AMBIENT_DIM = 0x30;
const AMBIENT_LIT = 0x70;

const POINTER_LIGHT_INTENSITY = 1.2;
const POINTER_EASE_SECONDS = 0.12;
const POINTER_FADE_SECONDS = 0.35;
const FLARE_DECAY_SECONDS = 0.5;

const SURGE_BURSTS = 5;
const SURGE_BURST_GAP_MS = 140;
const SURGE_FLARE = 4;
const AMBIENT_SURGE = 0xc0;
const SURGE_SETTLE_SECONDS = 2.5;

const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, label, [role='button']";

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");
  }

  private wellLight!: Phaser.GameObjects.Light;
  private caveLight!: Phaser.GameObjects.Light;
  private gemLight!: Phaser.GameObjects.Light;
  private pointerLight!: Phaser.GameObjects.Light;
  private bg!: Phaser.GameObjects.Image;
  private wisps: Wisp[] = [];

  private readonly CAVE_REL_X = 0.30;
  private readonly CAVE_REL_Y = 0.35;
  private readonly GEM_REL_X = 0.50;
  private readonly GEM_REL_Y = 0.20;

  private oldWellX: number = 0;
  private oldWellY: number = 0;

  private lighting = { ambient: AMBIENT_DIM, well: 0, side: 0 };
  private wellFlicker = 1;
  private wellFlare = 0;

  private pointer: Point | null = null;
  private pointerIntensity = 0;
  private removeDomListeners: () => void = () => { };

  scaleBackground() {
    if (!this.bg) return;

    const canvasW = this.scale.width;
    const canvasH = this.scale.height;

    const scale = Math.max(canvasW / this.bg.width, canvasH / this.bg.height);
    this.bg.setScale(scale);
    this.bg.setPosition(
      canvasW * EC.wellRelX + (0.5 - EC.wellRelX) * this.bg.displayWidth,
      canvasH * EC.wellRelY + (0.5 - EC.wellRelY) * this.bg.displayHeight,
    );

    this.updateLightsPosition();
  }

  private wellPosition(): Point {
    return {
      x: this.bg.x + (EC.wellRelX - 0.5) * this.bg.displayWidth,
      y: this.bg.y + (EC.wellRelY - 0.5) * this.bg.displayHeight,
    };
  }

  private updateLightsPosition() {
    if (!this.bg) return;

    const well = this.wellPosition();
    this.wellLight.setPosition(well.x, well.y);

    this.caveLight.x = this.bg.x + (this.CAVE_REL_X - 0.5) * this.bg.displayWidth;
    this.caveLight.y = this.bg.y + (this.CAVE_REL_Y - 0.5) * this.bg.displayHeight;

    this.gemLight.x = this.bg.x + (this.GEM_REL_X - 0.5) * this.bg.displayWidth;
    this.gemLight.y = this.bg.y + (this.GEM_REL_Y - 0.5) * this.bg.displayHeight;
  }

  private updateFairyLightsPosition() {
    const { x: newWellX, y: newWellY } = this.wellPosition();

    this.wisps.forEach(wisp => {
      const light = wisp.light;
      if (!light.active) return;

      const offsetX = light.x - (this.oldWellX || newWellX);
      const offsetY = light.y - (this.oldWellY || newWellY);

      light.x = newWellX + offsetX;
      light.y = newWellY + offsetY;
    });

    // Store new well position for next resize
    this.oldWellX = newWellX;
    this.oldWellY = newWellY;
  }

  private textureWidth() {
    const needed = Math.max(window.innerWidth, window.innerHeight * EC.caveAspect);
    return TEXTURE_WIDTHS.find(width => width >= needed) ?? TEXTURE_WIDTHS[TEXTURE_WIDTHS.length - 1];
  }

  preload() {
    const width = this.textureWidth();
    this.load.image({
      key: "menuBackground",
      url: `/images/nextImageExportOptimizer/cave-opt-${width}.WEBP`,
      normalMap: `/images/nextImageExportOptimizer/cavebg-normal-map-opt-${width}.WEBP`,
    });
  }

  create() {
    this.sound.pauseOnBlur = false;

    // Background
    this.bg = this.add.image(0, 0, "menuBackground")
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setPipeline("Light2D");

    // Lights
    this.lights.enable();
    this.applyAmbient();

    this.wellLight = this.lights.addLight(0, 0, 4000).setIntensity(0);
    this.caveLight = this.lights.addLight(0, 0, 4000).setIntensity(0);
    this.gemLight = this.lights.addLight(0, 0, 4000).setIntensity(0);
    this.pointerLight = this.lights.addLight(0, 0, this.pointerRadius(), POINTER_COLOR, 0);

    this.scaleBackground();

    this.scale.on('resize', () => {
      this.scaleBackground();
      this.updateFairyLightsPosition();
      this.pointerLight.setRadius(this.pointerRadius());
    });

    this.listenToPointer();
    this.updateFairyLightsPosition();

    let nextRandomIntensity = Math.random() * 2;
    this.time.addEvent({
      delay: 50,
      callback: () => {
        if (nextRandomIntensity < 1.5) nextRandomIntensity += (Math.random() * 0.2);
        if (nextRandomIntensity > 0.5) nextRandomIntensity -= (Math.random() * 0.2);
        this.wellFlicker = nextRandomIntensity;
      },
      loop: true
    });

    this.game.events.emit(CAVE_READY_EVENT);
    this.time.delayedCall(DIM_SECONDS * 1000, () => this.ignite());
  }

  private ignite() {
    this.tweens.add({
      targets: this.lighting,
      ambient: AMBIENT_LIT,
      well: 1,
      side: 1,
      duration: IGNITE_SECONDS * 1000,
      ease: "Cubic.easeOut",
    });

    this.time.delayedCall(IGNITE_SECONDS * 1000 * 0.35, () => {
      this.wellFlare = 1.5;
      window.dispatchEvent(new Event(EC.wellIgnitedEvent));
    });

    const spawnFairyAtWell = () => {
      const well = this.wellPosition();
      this.addWisp(createWellFairyLight(this, well.x, well.y, WISP_COLOR));
    };

    this.time.addEvent({
      delay: 10000,
      callback: spawnFairyAtWell,
      loop: true
    });

    for (let i = 0; i < 3; i++) {
      spawnFairyAtWell();
    }
  }

  private addWisp(wisp: Wisp) {
    if (this.wisps.length >= MAX_WISPS) {
      this.wisps.shift()?.light.destroy();
    }
    this.wisps.push(wisp);
  }

  private burstFromWell() {
    const well = this.wellPosition();
    this.wellFlare = 1.5;

    for (let i = 0; i < BURST_SIZE; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.2;
      const speed = 90 + Math.random() * 90;
      this.addWisp(createBurstFairyLight(this, well.x, well.y, WISP_COLOR, {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      }));
    }
  }

  private surge() {
    for (let i = 0; i < SURGE_BURSTS; i++) {
      this.time.delayedCall(i * SURGE_BURST_GAP_MS, () => this.burstFromWell());
    }
    this.time.delayedCall(SURGE_BURSTS * SURGE_BURST_GAP_MS, () => { this.wellFlare = SURGE_FLARE; });

    this.tweens.killTweensOf(this.lighting);
    this.lighting.ambient = AMBIENT_SURGE;
    this.tweens.add({
      targets: this.lighting,
      ambient: AMBIENT_LIT,
      well: 1,
      side: 1,
      duration: SURGE_SETTLE_SECONDS * 1000,
      ease: "Cubic.easeIn",
    });
  }

  private pointerRadius() {
    return Math.max(250, Math.min(this.scale.width, this.scale.height) * 0.45);
  }

  private wellHitRadius() {
    return Math.max(60, this.bg.displayWidth * 0.06);
  }

  private toCanvasPoint(event: PointerEvent): Point | null {
    const rect = this.game.canvas.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) {
      return null;
    }
    return {
      x: (event.clientX - rect.left) * (this.scale.width / rect.width),
      y: (event.clientY - rect.top) * (this.scale.height / rect.height),
    };
  }

  private toWorld(point: Point): Point {
    const world = this.cameras.main.getWorldPoint(point.x, point.y);
    return { x: world.x, y: world.y };
  }

  private applyDiveZoom() {
    const progress = Phaser.Math.Clamp(window.scrollY / this.scale.height, 0, 1);
    const well = this.wellPosition();
    const camera = this.cameras.main;
    camera.setOrigin(well.x / this.scale.width, well.y / this.scale.height);
    camera.setZoom(1 + EC.diveZoom * progress);
  }

  private isNearWell(point: Point) {
    const well = this.wellPosition();
    return Math.hypot(point.x - well.x, point.y - well.y) <= this.wellHitRadius();
  }

  private listenToPointer() {
    const onMove = (event: PointerEvent) => {
      this.pointer = this.toCanvasPoint(event);
      this.game.canvas.style.cursor = this.pointer && this.isNearWell(this.toWorld(this.pointer)) ? "pointer" : "";
    };
    const onDown = (event: PointerEvent) => {
      const point = this.toCanvasPoint(event);
      this.pointer = point;
      const target = event.target as Element | null;
      if (point && this.isNearWell(this.toWorld(point)) && !target?.closest(INTERACTIVE_SELECTOR)) {
        this.burstFromWell();
      }
    };
    const onRelease = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") this.pointer = null;
    };
    const onLeave = () => { this.pointer = null; };
    const onSurge = () => this.surge();

    window.addEventListener(EC.wellSurgeEvent, onSurge);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onRelease, { passive: true });
    window.addEventListener("pointercancel", onRelease, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    this.removeDomListeners = () => {
      window.removeEventListener(EC.wellSurgeEvent, onSurge);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onRelease);
      window.removeEventListener("pointercancel", onRelease);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
    this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => this.removeDomListeners());
    this.events.once(Phaser.Scenes.Events.DESTROY, () => this.removeDomListeners());
  }

  private applyAmbient() {
    const level = Math.round(this.lighting.ambient);
    this.lights.setAmbientColor((level << 16) | (level << 8) | level);
  }

  update(_time: number, delta: number) {
    const dt = Math.min(delta, 100) / 1000;

    this.applyDiveZoom();
    const pointer = this.pointer ? this.toWorld(this.pointer) : null;
    this.applyAmbient();
    this.wellFlare *= Math.exp(-dt / FLARE_DECAY_SECONDS);
    this.wellLight.setIntensity(this.wellFlicker * this.lighting.well + this.wellFlare);
    this.caveLight.setIntensity(this.lighting.side);
    this.gemLight.setIntensity(this.lighting.side);

    if (pointer) {
      const follow = 1 - Math.exp(-dt / POINTER_EASE_SECONDS);
      if (this.pointerIntensity <= 0.01) {
        this.pointerLight.setPosition(pointer.x, pointer.y);
      } else {
        this.pointerLight.x += (pointer.x - this.pointerLight.x) * follow;
        this.pointerLight.y += (pointer.y - this.pointerLight.y) * follow;
      }
    }
    const targetIntensity = pointer ? POINTER_LIGHT_INTENSITY * this.lighting.well : 0;
    this.pointerIntensity += (targetIntensity - this.pointerIntensity) * (1 - Math.exp(-dt / POINTER_FADE_SECONDS));
    this.pointerLight.setIntensity(this.pointerIntensity);

    const width = this.scale.width;
    const height = this.scale.height;
    this.wisps = this.wisps.filter(wisp => wisp.update(dt, width, height, pointer));
  }

}
