import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import styles from '../../Templates/BaseTemplate.module.scss';

const ART_ZOOM = 0.1;
const PARALLAX_PX = 140;

const NEAR_MARGIN = '150% 0px';
const IDLE_TIMEOUT_MS = 2000;

const STANDARD_ART_WIDTH = 1920;

const SectionArt = ({ classes = "", anchorRef, parallax = PARALLAX_PX, zoom = ART_ZOOM, isEager = false, children }) => {
  const frameRef = useRef(null);
  const imageRef = useRef(null);
  const [anchorY, setAnchorY] = useState(null);
  const [isArtReady, setIsArtReady] = useState(isEager);
  const [isHiRes, setIsHiRes] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + zoom]);
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

  useEffect(() => {
    if (isEager) return;
    let cancelIdle = () => {};
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) markReady();
    }, { rootMargin: NEAR_MARGIN });
    function markReady() {
      observer.disconnect();
      setIsArtReady(true);
    }
    const afterLoad = () => {
      if (window.requestIdleCallback) {
        const handle = window.requestIdleCallback(markReady, { timeout: IDLE_TIMEOUT_MS });
        cancelIdle = () => window.cancelIdleCallback(handle);
      } else {
        const handle = setTimeout(markReady);
        cancelIdle = () => clearTimeout(handle);
      }
    };

    observer.observe(frameRef.current);
    if (document.readyState === 'complete') afterLoad();
    else window.addEventListener('load', afterLoad, { once: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('load', afterLoad);
      cancelIdle();
    };
  }, [isEager]);

  useEffect(() => {
    const aspect = parseFloat(getComputedStyle(frameRef.current).getPropertyValue('--art-aspect'));
    if (!aspect) return;
    const image = imageRef.current;
    const measure = () => {
      const coveredWidth = Math.max(image.offsetWidth, image.offsetHeight * aspect) * (1 + zoom) * window.devicePixelRatio;
      if (coveredWidth > STANDARD_ART_WIDTH) setIsHiRes(true);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(image);
    return () => observer.disconnect();
  }, [zoom]);

  useEffect(() => {
    if (!anchorRef) return;
    const frame = frameRef.current;
    const measure = () => {
      if (!anchorRef.current) return;
      setAnchorY(Math.round(anchorRef.current.getBoundingClientRect().top - frame.getBoundingClientRect().top));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [anchorRef]);

  return (
    <div
      ref={frameRef}
      className={styles.artFrame + " " + classes + (anchorY === null ? "" : " " + styles.anchored)
        + (isArtReady ? " " + styles.artReady : "") + (isHiRes ? " " + styles.artHiRes : "")}
      style={{ "--parallax-room": `${parallax}px`, ...(anchorY === null ? {} : { "--anchor-y": `${anchorY}px` }) }}
      aria-hidden="true">
      <motion.div ref={imageRef} className={styles.artImage} style={reduceMotion ? undefined : { scale, y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default SectionArt;
