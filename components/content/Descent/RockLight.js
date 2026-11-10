const TILE_PX = 1024;
const SHADE_RGB = [2 / 255, 4 / 255, 5 / 255];
const SHADE_ALPHA = 0.6;
const LIGHT_HEIGHT_PX = 140;
const LIGHT_REACH_PX = 460;
const RELIEF = 12;

const VERTEX = `
attribute vec2 corner;
void main() { gl_Position = vec4(corner, 0.0, 1.0); }
`;

const FRAGMENT = `
precision mediump float;
uniform sampler2D rock;
uniform sampler2D normals;
uniform vec2 viewport;
uniform vec2 scroll;
uniform vec2 light;
uniform float dpr;
uniform vec3 shade;
uniform float shadeAlpha;
uniform float tile;
uniform float lightHeight;
uniform float reach;
uniform float relief;
void main() {
  vec2 p = vec2(gl_FragCoord.x / dpr, viewport.y - gl_FragCoord.y / dpr);
  vec2 uv = (p + scroll) / tile;
  vec3 colour = mix(texture2D(rock, uv).rgb, shade, shadeAlpha);
  vec3 n = normalize(texture2D(normals, uv).rgb * 2.0 - 1.0);
  vec3 toLight = vec3(light - p, lightHeight);
  vec3 l = normalize(toLight);
  float falloff = 1.0 - smoothstep(0.0, reach, length(toLight.xy));
  float lit = 1.0 + relief * (dot(n, l) - l.z) * falloff;
  gl_FragColor = vec4(colour * max(lit, 0.0), 1.0);
}
`;

const loadImage = (src) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => resolve(image);
  image.onerror = reject;
  image.src = src;
});

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
  return shader;
};

const uploadTexture = (gl, unit, image) => {
  const texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0 + unit);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
  gl.generateMipmap(gl.TEXTURE_2D);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  return texture;
};

export default async function createRockLight(canvas, { rockSrc, normalSrc }) {
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
  if (!gl) return null;

  let images;
  try {
    images = await Promise.all([loadImage(rockSrc), loadImage(normalSrc)]);
  } catch {
    return null;
  }

  const program = gl.createProgram();
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
  gl.linkProgram(program);
  gl.useProgram(program);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const corner = gl.getAttribLocation(program, 'corner');
  gl.enableVertexAttribArray(corner);
  gl.vertexAttribPointer(corner, 2, gl.FLOAT, false, 0, 0);

  const textures = images.map((image, unit) => uploadTexture(gl, unit, image));
  const at = (name) => gl.getUniformLocation(program, name);
  gl.uniform1i(at('rock'), 0);
  gl.uniform1i(at('normals'), 1);
  gl.uniform3fv(at('shade'), SHADE_RGB);
  gl.uniform1f(at('shadeAlpha'), SHADE_ALPHA);
  gl.uniform1f(at('tile'), TILE_PX);
  gl.uniform1f(at('lightHeight'), LIGHT_HEIGHT_PX);
  gl.uniform1f(at('reach'), LIGHT_REACH_PX);
  gl.uniform1f(at('relief'), RELIEF);

  const scrollAt = at('scroll');
  const lightAt = at('light');
  let width = 0;
  let height = 0;
  let last = null;

  return {
    resize(nextWidth, nextHeight, dpr) {
      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(at('viewport'), width, height);
      gl.uniform1f(at('dpr'), canvas.width / width);
      last = null;
    },
    draw(light, scrollX, scrollY) {
      if (last && last.scrollX === scrollX && last.scrollY === scrollY
        && Math.abs(last.x - light.x) < 1 && Math.abs(last.y - light.y) < 1) return;
      last = { x: light.x, y: light.y, scrollX, scrollY };
      gl.uniform2f(scrollAt, scrollX, scrollY);
      gl.uniform2f(lightAt, light.x, light.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    },
    destroy() {
      textures.forEach(texture => gl.deleteTexture(texture));
      gl.deleteProgram(program);
    },
  };
}
