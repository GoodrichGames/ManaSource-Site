let hasFastGraphicsResult;

export function hasFastGraphics() {
  if (hasFastGraphicsResult === undefined) {
    const gl = document.createElement('canvas').getContext('webgl', { failIfMajorPerformanceCaveat: true });
    hasFastGraphicsResult = Boolean(gl);
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
  }
  return hasFastGraphicsResult;
}

export function prefersStaticScene() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || !hasFastGraphics();
}
