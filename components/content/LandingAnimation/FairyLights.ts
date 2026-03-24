export function createWellFairyLight(scene: Phaser.Scene, xPos: number, yPos: number, color: number, momentumIntervalDuration: number, velocityIntervalDuration: number) {
  return createFairyLight(scene, xPos, yPos, color, .2, 100, momentumIntervalDuration, velocityIntervalDuration);
}

export function createFairyLight(scene: Phaser.Scene, xPos: number, yPos: number, color: number, alpha: number, maxStepsAlive: number, momentumIntervalDuration: number, velocityIntervalDuration: number) {
  const fairyLight = scene.add.pointlight(xPos, yPos, color, 20, .2, .1);
  fairyLight.alpha = alpha;
  let fairyMovementX = 0;
  let fairyMovementY = 0;
  let stepsAlive = 0;

  const velocityInterval = setInterval(() => {
    fairyLight.setX(fairyLight.x + fairyMovementX);
    fairyLight.setY(fairyLight.y + fairyMovementY);
  }, velocityIntervalDuration);

  const momentumInterval = setInterval(() => {
    const width = scene.scale.width;
    const height = scene.scale.height;
    
    const isTooFarX = (fairyLight.x < width * 0.05) || (fairyLight.x > width * .95) ? -1 : 1;
    const isTooFarY = (fairyLight.y < height * 0.05) || (fairyLight.y > height * .95) ? -1 : 1;
    
    fairyMovementX = (isTooFarX * fairyMovementX * .6) + Math.random() * (Math.random() < 0.5 ? -1 : 1);
    fairyMovementY = (isTooFarY * fairyMovementY * .6) + Math.random() * (Math.random() < 0.5 ? -1 : 1);

    if (stepsAlive < 3) {
      fairyMovementY -= 3;
      fairyLight.alpha = fairyLight.alpha + 0.05;
    } else if (stepsAlive < maxStepsAlive) {
      fairyLight.alpha = fairyLight.alpha + 0.05 * (Math.random() < 0.5 ? -1 : 1);
    } else {
      fairyLight.alpha = fairyLight.alpha - 0.05;
    }

    if (fairyLight.alpha <= 0) {
      fairyLight.destroy();
      clearInterval(momentumInterval);
      clearInterval(velocityInterval);
    }

    stepsAlive++;

  }, momentumIntervalDuration);

  return fairyLight;
}
