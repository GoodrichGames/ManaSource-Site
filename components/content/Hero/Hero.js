import ExportedImage from "next-image-export-optimizer";
import styles from '../../Templates/BaseTemplate.module.scss';
import infoboxStyles from '../InfoBox/InfoBox.module.scss';
import InfoBox from '../InfoBox/InfoBox';
import ScrollArrow from '../ScrollArrow/ScrollArrow';
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
const Hero = ({ overlayClasses = "", children }) => (
  <>
    <div className={styles.logo + " " + styles.tCenter + " " + styles.overlayText}>
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
      <h1 className="hidden">
        Mana Source
      </h1>
    </div>
    <div className={styles.heroImage}>
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
          display: "block",
        }} />
      <ScrollArrow href="#main" classes={styles.offset} preload={true} />
      <div className={styles.dH0}>
        <InfoBox classes={infoboxStyles.offset + " " + infoboxStyles.overlay + " " + overlayClasses}>
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

export default Hero;
