/**
 * Sends an event to Google Analytics.
 *
 * Safe to call from anywhere: does nothing during server rendering, and does nothing
 * when gtag is unavailable because analytics failed to load or was blocked.
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, params);
};

/** Event name for a completed newsletter subscription. Mark this as a key event in GA4. */
export const SIGNUP_EVENT = 'newsletter_signup';
