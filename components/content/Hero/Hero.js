import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import ExportedImage from "next-image-export-optimizer";
import styles from '../../Templates/BaseTemplate.module.scss';
import infoboxStyles from '../InfoBox/InfoBox.module.scss';
import InfoBox from '../InfoBox/InfoBox';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
import EC from '../LandingAnimation/EngineConstants';
import logo from '../../../public/images/ManaSourceLogoV2.png';
import cavePic from '../../../public/images/cave.png';
import agesPic from '../../../public/icons/ages.png';
import playersPic from '../../../public/icons/players.png';
import timePic from '../../../public/icons/hourglass.png';

const statClasses = styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50 + " " + styles.heroStat;

const StatIcon = ({ src, alt }) => (
  <ExportedImage
    src={src}
    alt={alt}
    height="50"
    preload={true}
    unoptimized={true}
    sizes="128px"
    style={{
      maxWidth: "100%",
      height: "auto",
      objectFit: "contain"
    }} />
);

// `overlayClasses` lets a page add page-specific styling to the stat overlay.
// `children` is rendered inside the overlay, below the intro copy.
const GEM_CLICKS_TO_SURGE = 5;
const GEM_CLICK_WINDOW_MS = 1500;
const SURGE_GLOW_MS = 2400;

const Hero = ({ overlayClasses = "", children }) => {
  const [isIgnited, setIsIgnited] = useState(false);
  const [isSurging, setIsSurging] = useState(false);
  const gemClicks = useRef({ count: 0, last: 0 });

  const onGemClick = () => {
    const now = performance.now();
    const clicks = gemClicks.current;
    clicks.count = now - clicks.last <= GEM_CLICK_WINDOW_MS ? clicks.count + 1 : 1;
    clicks.last = now;
    if (clicks.count < GEM_CLICKS_TO_SURGE) return;
    clicks.count = 0;
    window.dispatchEvent(new Event(EC.wellSurgeEvent));
    setIsSurging(true);
    setTimeout(() => setIsSurging(false), SURGE_GLOW_MS);
  };

  useEffect(() => {
    const onIgnite = () => setIsIgnited(true);
    window.addEventListener(EC.wellIgnitedEvent, onIgnite);
    return () => window.removeEventListener(EC.wellIgnitedEvent, onIgnite);
  }, []);

  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const logoY = useTransform(scrollY, value => value * 0.4);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const caveDim = useTransform(scrollYProgress, [0, 0.5, 0.9], [0, 0.45, 1]);
  const caveZoom = useTransform(scrollYProgress, [0, 1], [1, 1 + EC.diveZoom]);

  return (
  <>
    <motion.div
      className={styles.logo + " " + styles.tCenter + " " + styles.overlayText + (isIgnited ? " " + styles.logoIgnite : "") + (isSurging ? " " + styles.logoSurge : "")}
      style={reduceMotion ? undefined : { y: logoY, opacity: logoOpacity }}>
      <span className={styles.logoWrap}>
      <ExportedImage src={logo}
        alt='Mana Source logo'
        height={250}
        width={0}
        preload={true}
        loading="eager"
        fetchPriority="high"
        style={{
          width: "auto",
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain"
        }} />
      <span className={styles.logoGem} onClick={onGemClick} aria-hidden="true" />
      </span>
      <h1 className="hidden">
        Mana Source
      </h1>
    </motion.div>
    <div className={styles.heroImage} ref={heroRef}>
      <div className={styles.heroZoomFrame}>
      <motion.div style={reduceMotion ? undefined : { scale: caveZoom, transformOrigin: `${EC.wellRelX * 100}% ${EC.wellRelY * 100}%` }}>
      <ExportedImage
        src={cavePic}
        alt='mana well in cave'
        height="990"
        preload={true}
        placeholder="blur"
        style={{
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          objectPosition: `${EC.wellRelX * 100}% ${EC.wellRelY * 100}%`,
          display: "block",
        }} />
      </motion.div>
      </div>
      <motion.div className={styles.heroDim} style={reduceMotion ? undefined : { opacity: caveDim }} aria-hidden="true" />
      <div className={styles.heroFade} aria-hidden="true" />
      <ScrollArrow href="#main" classes={styles.offset} preload={true} />
      <div className={styles.dH0}>
        <InfoBox variant="plain" classes={infoboxStyles.offset + " " + infoboxStyles.overlay + " " + infoboxStyles.afterOpening + " " + overlayClasses}>
          <div className={statClasses}>
            <StatIcon src={agesPic} alt='ages' /><br />
            <div className={styles.heroStatText}>
              <p><strong>Ages</strong></p>
              <p>13+</p>
            </div>
          </div>
          <div className={statClasses}>
            <StatIcon src={playersPic} alt='players' /><br />
            <div className={styles.heroStatText}>
              <p><strong>Players</strong></p>
              <p>1-4</p>
            </div>
          </div>
          <div className={statClasses}>
            <StatIcon src={timePic} alt='time to play' /><br />
            <div className={styles.heroStatText + " " + styles.heroPlayTimes}>
              <div className={styles.fourtyFiveW + " " + styles.inline}>
                <strong>PvE</strong>
                <p>60-180 min</p>
              </div>
              <div className={styles.fourtyFiveW + " " + styles.inline}>
                <strong>PvP</strong>
                <p>20-30 min</p>
              </div>
            </div>
          </div>
          <span className="spacer2" aria-hidden="true"></span>
          <p className={styles.fontPhilosopher}>
            <em>
              For thousands of years nations have fought for <strong>mana wells</strong>, which are now essential to modern life. <br />
              Each nation has unique weapons, talents, and battlefield-warping effects to emerge victorious.<br />
              But be careful, each opponent may have a few tricks they&apos;ve picked up from another nation...
            </em>
          </p>
          {children}
        </InfoBox>
      </div>
    </div>
  </>
  );
};

export default Hero;
