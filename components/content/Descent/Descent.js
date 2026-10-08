import { useEffect, useRef } from 'react';
import styles from './Descent.module.scss';
import infoboxStyles from '../InfoBox/InfoBox.module.scss';
import templateStyles from '../../Templates/BaseTemplate.module.scss';
import EC from '../LandingAnimation/EngineConstants';

const MIN_DARK = 0.35;
const MAX_DARK = 0.82;
const DARK_FADE_START = 0.3;
const DARK_FADE_END = 0.9;
const DEPTH_COLOURS = [[0, 22, 26], [26, 14, 2], [2, 6, 24]];

const LIGHT_EASE_SECONDS = 0.08;
const POOL_LIGHT_SPREAD = 0.75;

const MOTE_COUNT_DESKTOP = 56;
const MOTE_COUNT_PHONE = 28;
const RUSH = 1.4;
const STREAK = 2.2;

const WISP_STEP_SECONDS = 0.5;
const WISP_PX_PER_SECOND = 20;
const WISP_VELOCITY_EASE_SECONDS = 0.4;
const WISP_ALPHA_EASE_SECONDS = 0.3;
const WISP_ATTRACT_PX_PER_SECOND = 12;
const WISP_HOME_PX_PER_SECOND = 60;
const WISP_SCROLL_LAG = 0.3;
const WISP_RADIUS = 20;
const WISP_LIGHT_MARGIN = 40;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function depthColour(t) {
  const scaled = clamp(t, 0, 1) * (DEPTH_COLOURS.length - 1);
  const i = Math.min(Math.floor(scaled), DEPTH_COLOURS.length - 2);
  const f = scaled - i;
  return DEPTH_COLOURS[i].map((c, k) => Math.round(lerp(c, DEPTH_COLOURS[i + 1][k], f))).join(' ');
}

function makeMote(width, height) {
  const isGrit = Math.random() < 0.3;
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    z: 0.3 + Math.random(),
    r: isGrit ? 1 + Math.random() * 1.6 : 0.6 + Math.random() * 1.2,
    alpha: isGrit ? 0.35 + Math.random() * 0.3 : 0.15 + Math.random() * 0.35,
    isGrit,
    drift: (Math.random() - 0.5) * 6,
    phase: Math.random() * Math.PI * 2,
  };
}

export default function Descent() {
  const layersRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;

    const layers = layersRef.current;
    let panels = [];
    let pool = null;
    const refreshElements = () => {
      panels = [...document.querySelectorAll('.' + infoboxStyles.infoBox)];
      pool = document.querySelector('.' + templateStyles.footerPool);
    };

    let motes = [];
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = width < 768 ? MOTE_COUNT_PHONE : MOTE_COUNT_DESKTOP;
      motes = Array.from({ length: count }, () => makeMote(width, height));
      refreshElements();
    };
    resize();

    let pointer = null;
    const onMove = (event) => { pointer = { x: event.clientX, y: event.clientY }; };
    const onLeave = () => { pointer = null; };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);
    const refreshTimer = setInterval(refreshElements, 1000);

    const light = { x: width / 2, y: height * 0.45 };
    const wisp = {
      x: width * EC.wellRelX, y: height * EC.wellRelY, vx: 0, vy: 0,
      momentumX: 0, momentumY: 0, alpha: 0.3, targetAlpha: 0.3, sinceStep: 0,
    };
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let frame;

    const tick = (now) => {
      const dt = Math.min(now - lastTime, 100) / 1000;
      lastTime = now;
      const t = now / 1000;
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      const lightTarget = pointer ?? { x: width * (0.5 + 0.15 * Math.sin(t * 0.3)), y: height * (0.45 + 0.05 * Math.sin(t * 0.21)) };
      const follow = 1 - Math.exp(-dt / LIGHT_EASE_SECONDS);
      light.x += (lightTarget.x - light.x) * follow;
      light.y += (lightTarget.y - light.y) * follow;

      wisp.sinceStep += dt;
      while (wisp.sinceStep >= WISP_STEP_SECONDS) {
        wisp.sinceStep -= WISP_STEP_SECONDS;
        const bounceX = (wisp.x < width * 0.05) || (wisp.x > width * 0.95) ? -1 : 1;
        const bounceY = (wisp.y < height * 0.05) || (wisp.y > height * 0.95) ? -1 : 1;
        wisp.momentumX = bounceX * wisp.momentumX * 0.6 + Math.random() * (Math.random() < 0.5 ? -1 : 1);
        wisp.momentumY = bounceY * wisp.momentumY * 0.6 + Math.random() * (Math.random() < 0.5 ? -1 : 1);
        wisp.targetAlpha = clamp(wisp.targetAlpha + 0.05 * (Math.random() < 0.5 ? -1 : 1), 0.2, 0.6);
      }
      let targetVx = wisp.momentumX * WISP_PX_PER_SECOND;
      let targetVy = wisp.momentumY * WISP_PX_PER_SECOND;
      const pull = (target, speed) => {
        const dx = target.x - wisp.x;
        const dy = target.y - wisp.y;
        const distance = Math.hypot(dx, dy);
        if (distance > 1) {
          targetVx += (dx / distance) * speed;
          targetVy += (dy / distance) * speed;
        }
      };
      if (scrollY < height * 0.4) {
        pull({ x: width * EC.wellRelX, y: height * EC.wellRelY - scrollY }, WISP_HOME_PX_PER_SECOND);
      } else if (pointer) {
        pull(pointer, WISP_ATTRACT_PX_PER_SECOND);
      }
      const wispBlend = 1 - Math.exp(-dt / WISP_VELOCITY_EASE_SECONDS);
      wisp.vx += (targetVx - wisp.vx) * wispBlend;
      wisp.vy += (targetVy - wisp.vy) * wispBlend;
      wisp.x += wisp.vx * dt;
      wisp.y += wisp.vy * dt - scrollDelta * WISP_SCROLL_LAG;
      wisp.x = clamp(wisp.x, 0, width);
      wisp.y = clamp(wisp.y, 0, height);
      wisp.alpha += (wisp.targetAlpha - wisp.alpha) * (1 - Math.exp(-dt / WISP_ALPHA_EASE_SECONDS));

      const depth = clamp((scrollY + height / 2) / document.documentElement.scrollHeight, 0, 1);
      const fadeIn = clamp((scrollY / height - DARK_FADE_START) / (DARK_FADE_END - DARK_FADE_START), 0, 1);
      layers.style.setProperty('--depth-dark', (fadeIn * lerp(MIN_DARK, MAX_DARK, depth)).toFixed(3));
      layers.style.setProperty('--depth-rgb', depthColour(depth));
      layers.style.setProperty('--light-x', `${light.x.toFixed(1)}px`);
      layers.style.setProperty('--light-y', `${light.y.toFixed(1)}px`);
      layers.style.setProperty('--wisp-x', `${wisp.x.toFixed(1)}px`);
      layers.style.setProperty('--wisp-y', `${wisp.y.toFixed(1)}px`);
      if (pool) {
        const poolRect = pool.getBoundingClientRect();
        layers.style.setProperty('--pool-x', `${(poolRect.left + poolRect.width / 2).toFixed(1)}px`);
        layers.style.setProperty('--pool-y', `${(poolRect.top + poolRect.height / 2).toFixed(1)}px`);
        layers.style.setProperty('--pool-rx', `${(poolRect.width * POOL_LIGHT_SPREAD).toFixed(1)}px`);
        layers.style.setProperty('--pool-ry', `${(poolRect.height * POOL_LIGHT_SPREAD * 1.6).toFixed(1)}px`);
      }

      panels.forEach(panel => {
        const rect = panel.getBoundingClientRect();
        const isLit = wisp.x > rect.left - WISP_LIGHT_MARGIN && wisp.x < rect.right + WISP_LIGHT_MARGIN
          && wisp.y > rect.top - WISP_LIGHT_MARGIN && wisp.y < rect.bottom + WISP_LIGHT_MARGIN;
        panel.classList.toggle(infoboxStyles.wispLit, isLit);
      });

      ctx.clearRect(0, 0, width, height);

      motes.forEach(m => {
        const shift = scrollDelta * m.z * RUSH;
        m.y -= shift;
        m.y += Math.sin(t * 0.5 + m.phase) * 4 * dt - 3 * m.z * dt;
        m.x += (m.drift + Math.cos(t * 0.4 + m.phase) * 3) * dt;
        if (m.y < -20) { m.y = height + 20; m.x = Math.random() * width; }
        if (m.y > height + 20) { m.y = -20; m.x = Math.random() * width; }
        if (m.x < -10) m.x = width + 10;
        if (m.x > width + 10) m.x = -10;

        const colour = m.isGrit ? `rgba(150, 130, 110, ${m.alpha})` : `rgba(255, 236, 200, ${m.alpha})`;
        if (Math.abs(shift) > 2) {
          ctx.strokeStyle = colour;
          ctx.lineWidth = m.r;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(m.x, m.y);
          ctx.lineTo(m.x, m.y + shift * STREAK);
          ctx.stroke();
        } else {
          ctx.fillStyle = colour;
          ctx.beginPath();
          ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      const glow = ctx.createRadialGradient(wisp.x, wisp.y, 0, wisp.x, wisp.y, WISP_RADIUS);
      glow.addColorStop(0, `rgba(255, 255, 255, ${wisp.alpha})`);
      glow.addColorStop(0.35, `rgba(255, 255, 255, ${wisp.alpha * 0.45})`);
      glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.globalCompositeOperation = 'lighter';
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(wisp.x, wisp.y, WISP_RADIUS, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(refreshTimer);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
      panels.forEach(panel => panel.classList.remove(infoboxStyles.wispLit));
    };
  }, []);

  return (
    <div ref={layersRef} aria-hidden="true">
      <div className={styles.darkness} />
      <div className={styles.lightTint} />
      <canvas ref={canvasRef} className={styles.particles} />
    </div>
  );
}
