import Phaser from "phaser";
import { createWellFairyLight } from "./FairyLights";

export default class MainMenu extends Phaser.Scene {
  constructor() {
    super("MainMenu");
  }

  private wellLight!: Phaser.GameObjects.Light;
  private caveLight!: Phaser.GameObjects.Light;
  private gemLight!: Phaser.GameObjects.Light;
  private bg!: Phaser.GameObjects.Image;
  private fairyLights: Phaser.GameObjects.PointLight[] = [];

  private readonly WELL_REL_X = 0.675;
  private readonly WELL_REL_Y = 0.50;
  private readonly CAVE_REL_X = 0.30;
  private readonly CAVE_REL_Y = 0.35;
  private readonly GEM_REL_X = 0.50;
  private readonly GEM_REL_Y = 0.20;

  private oldWellX: number = 0;
  private oldWellY: number = 0;

  scaleBackground() {
    if (!this.bg) return;

    const canvasW = this.scale.width;
    const canvasH = this.scale.height;

    // Cover scaling (same as before)
    const scaleX = canvasW / this.bg.width;
    const scaleY = canvasH / this.bg.height;
    const scale = Math.max(scaleX, scaleY);

    this.bg.setScale(scale);
    this.bg.setPosition(canvasW / 2, canvasH / 2);

    this.updateLightsPosition();
  }

  private updateLightsPosition() {
    if (!this.bg) return;

    // This is the correct formula for "cover" scaling
    this.wellLight.x = this.bg.x + (this.WELL_REL_X - 0.5) * this.bg.displayWidth;
    this.wellLight.y = this.bg.y + (this.WELL_REL_Y - 0.5) * this.bg.displayHeight;

    this.caveLight.x = this.bg.x + (this.CAVE_REL_X - 0.5) * this.bg.displayWidth;
    this.caveLight.y = this.bg.y + (this.CAVE_REL_Y - 0.5) * this.bg.displayHeight;

    this.gemLight.x = this.bg.x + (this.GEM_REL_X - 0.5) * this.bg.displayWidth;
    this.gemLight.y = this.bg.y + (this.GEM_REL_Y - 0.5) * this.bg.displayHeight;
  }

  private updateFairyLightsPosition() {
  const width = this.scale.width;
  const height = this.scale.height;

  const newWellX = this.bg.x + (this.WELL_REL_X - 0.5) * this.bg.displayWidth;
  const newWellY = this.bg.y + (this.WELL_REL_Y - 0.5) * this.bg.displayHeight;

  this.fairyLights.forEach(light => {
    if (!light || !light.active) return;   // safety check

    const offsetX = light.x - (this.oldWellX || newWellX);
    const offsetY = light.y - (this.oldWellY || newWellY);

    light.x = newWellX + offsetX;
    light.y = newWellY + offsetY;
  });

  // Store new well position for next resize
  this.oldWellX = newWellX;
  this.oldWellY = newWellY;

  // Clean up only destroyed lights
  this.fairyLights = this.fairyLights.filter(light => light && light.active);
  }

  preload() {
    this.load.image({ key: "menuBackground", url: "/images/nextImageExportOptimizer/cave-opt-3840.WEBP", normalMap: "/images/nextImageExportOptimizer/cavebg normal map-opt-3840.WEBP" });
    // this.load.audio("menuTheme", "assets/music/battle-of-the-dragons-8037.mp3");
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
    this.lights.setAmbientColor(0x707070);

    this.wellLight = this.lights.addLight(0, 0, 4000).setIntensity(2);
    this.caveLight = this.lights.addLight(0, 0, 4000).setIntensity(1);
    this.gemLight = this.lights.addLight(0, 0, 4000).setIntensity(1);

    this.scaleBackground();

    this.scale.on('resize', () => {
      this.scaleBackground();
      this.updateFairyLightsPosition();
    });

    const spawnFairyAtWell = () => {
      const spawnX = this.bg.x + (this.WELL_REL_X - 0.5) * this.bg.displayWidth;
      const spawnY = this.bg.y + (this.WELL_REL_Y - 0.5) * this.bg.displayHeight;
      this.fairyLights.push(createWellFairyLight(this, spawnX, spawnY, 0xffffff, 500, 50));
    };

    this.time.addEvent({
      delay: 10000,
      callback: spawnFairyAtWell,
      loop: true
    });

    for (let i = 0; i < 3; i++) {
      spawnFairyAtWell();
    }

    this.updateFairyLightsPosition();

    // Your intensity flicker timer (unchanged)
    let nextRandomIntensity = Math.random() * 2;
    this.time.addEvent({
      delay: 50,
      callback: () => {
        if (nextRandomIntensity < 1.5) nextRandomIntensity += (Math.random() * 0.2);
        if (nextRandomIntensity > 0.5) nextRandomIntensity -= (Math.random() * 0.2);
        this.wellLight.setIntensity(nextRandomIntensity);
      },
      loop: true
    });
  }

}
