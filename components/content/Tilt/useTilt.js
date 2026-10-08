import { useCallback } from 'react';

export default function useTilt(maxDegrees = 8) {
  const onPointerMove = useCallback((event) => {
    if (event.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    el.style.setProperty('--tilt-x', `${((0.5 - y) * 2 * maxDegrees).toFixed(2)}deg`);
    el.style.setProperty('--tilt-y', `${((x - 0.5) * 2 * maxDegrees).toFixed(2)}deg`);
    el.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`);
    el.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`);
  }, [maxDegrees]);

  const onPointerLeave = useCallback((event) => {
    const el = event.currentTarget;
    ['--tilt-x', '--tilt-y', '--glare-x', '--glare-y'].forEach(p => el.style.removeProperty(p));
  }, []);

  return { onPointerMove, onPointerLeave };
}
