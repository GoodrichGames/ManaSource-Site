import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import styles from '../../Templates/BaseTemplate.module.scss';

const ART_ZOOM = 0.1;
const PARALLAX_PX = 140;

const SectionArt = ({ classes = "", anchorRef, parallax = PARALLAX_PX, zoom = ART_ZOOM, children }) => {
  const frameRef = useRef(null);
  const [anchorY, setAnchorY] = useState(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + zoom]);
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

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
      className={styles.artFrame + " " + classes + (anchorY === null ? "" : " " + styles.anchored)}
      style={{ "--parallax-room": `${parallax}px`, ...(anchorY === null ? {} : { "--anchor-y": `${anchorY}px` }) }}
      aria-hidden="true">
      <motion.div className={styles.artImage} style={reduceMotion ? undefined : { scale, y }}>
        {children}
      </motion.div>
    </div>
  );
};

export default SectionArt;
