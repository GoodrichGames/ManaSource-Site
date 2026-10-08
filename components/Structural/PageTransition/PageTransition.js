import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './PageTransition.module.scss';

function pageLinkFrom(event) {
  if (event.defaultPrevented || event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const link = event.target.closest?.('a[href]');
  if (!link || link.target && link.target !== '_self' || link.hasAttribute('download')) return null;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname === window.location.pathname && url.search === window.location.search) return null;
  if (/\.[a-z0-9]+$/i.test(url.pathname)) return null;
  return url.pathname + url.search + url.hash;
}

const COVER_MS = 220;
const REVEAL_MS = 320;
const FALLBACK_MARGIN_MS = 150;

const PageTransition = () => {
  const router = useRouter();
  const [phase, setPhase] = useState("idle");
  const progress = useRef({ pendingUrl: null, isCovered: false });
  const fallback = useRef(null);
  const handlers = useRef({});

  useEffect(() => {
    const later = (step, ms) => {
      clearTimeout(fallback.current);
      fallback.current = setTimeout(step, ms + FALLBACK_MARGIN_MS);
    };
    const onRevealed = () => {
      clearTimeout(fallback.current);
      setPhase("idle");
    };
    const onCovered = () => {
      const current = progress.current;
      if (current.isCovered || !current.pendingUrl) return;
      current.isCovered = true;
      clearTimeout(fallback.current);
      router.push(current.pendingUrl);
    };
    const onClick = (event) => {
      let url = pageLinkFrom(event);
      if (!url) return;
      if (router.basePath && url.startsWith(router.basePath)) url = url.slice(router.basePath.length) || '/';
      event.preventDefault();
      event.stopPropagation();
      progress.current = { pendingUrl: url, isCovered: false };
      setPhase("cover");
      later(onCovered, COVER_MS);
    };
    const onDone = () => {
      if (!progress.current.pendingUrl) return;
      progress.current = { pendingUrl: null, isCovered: false };
      setPhase("reveal");
      later(onRevealed, REVEAL_MS);
    };
    handlers.current = { onCovered, onRevealed };

    window.addEventListener('click', onClick, true);
    router.events.on('routeChangeComplete', onDone);
    router.events.on('routeChangeError', onDone);
    return () => {
      window.removeEventListener('click', onClick, true);
      router.events.off('routeChangeComplete', onDone);
      router.events.off('routeChangeError', onDone);
    };
  }, [router]);

  useEffect(() => () => clearTimeout(fallback.current), []);

  const onAnimationEnd = () => {
    if (phase === "cover") handlers.current.onCovered?.();
    else if (phase === "reveal") handlers.current.onRevealed?.();
  };

  const phaseClass = phase === "idle" ? "" : " " + styles[phase];
  return <div className={styles.wipe + phaseClass} onAnimationEnd={onAnimationEnd} aria-hidden="true" />;
};

export default PageTransition;
