const IDLE_TIMEOUT_MS = 2000;

export function whenIdleAfterLoad(callback) {
  let cancel = () => {};

  const scheduleIdle = () => {
    if (window.requestIdleCallback) {
      const handle = window.requestIdleCallback(callback, { timeout: IDLE_TIMEOUT_MS });
      cancel = () => window.cancelIdleCallback(handle);
    } else {
      const handle = setTimeout(callback);
      cancel = () => clearTimeout(handle);
    }
  };

  if (document.readyState === 'complete') {
    scheduleIdle();
  } else {
    window.addEventListener('load', scheduleIdle, { once: true });
    cancel = () => window.removeEventListener('load', scheduleIdle);
  }

  return () => cancel();
}
