import { useRef } from 'react';
import { useInView } from 'framer-motion';
import ExportedImage from "next-image-export-optimizer";
import styles from './TurnRound.module.scss';
import cardBackPic from '../../../public/images/cards/card-back.jpg';
import bladestormPic from '../../../public/images/cards/action-bladestorm.jpg';
import leafstormPic from '../../../public/images/cards/action-leafstorm.jpg';
import deadlyInterjectionPic from '../../../public/images/cards/action-deadly-interjection.jpg';
import holyFirePic from '../../../public/images/cards/action-holy-fire.jpg';

const PLAYS = [
  { image: bladestormPic, alt: 'Bladestorm action card' },
  { image: leafstormPic, alt: 'Leafstorm action card' },
  { image: deadlyInterjectionPic, alt: 'Deadly Interjection action card' },
  { image: holyFirePic, alt: 'Holy Fire action card' },
];

const CARD_SIZES = "(max-width: 768px) 120px, 170px";

const TurnRound = () => {
  const rootRef = useRef(null);
  const isInView = useInView(rootRef, { margin: "0px 0px -15% 0px" });

  return (
    <div ref={rootRef} className={styles.turnRound + (isInView ? " " + styles.running : "")}>
      <h4 className={styles.headline}>Don&apos;t wait for your turn to play!</h4>
      <p className={styles.copy}>
        <strong>Simultaneous turns</strong> keep everyone focused on the action.<br />
        Players must <strong>coordinate</strong> their abilities to overcome challenges and defeat deadly adversaries.
      </p>
      <div className={styles.table}>
        <div className={styles.pulse} aria-hidden="true" />
        {PLAYS.map(play => (
          <div key={play.alt} className={styles.seat}>
            <div className={styles.card}>
              <div className={styles.inner}>
                <div className={styles.back} aria-hidden="true">
                  <ExportedImage src={cardBackPic} alt="" fill sizes={CARD_SIZES} className={styles.art} />
                </div>
                <div className={styles.face}>
                  <ExportedImage src={play.image} alt={play.alt} fill sizes={CARD_SIZES} className={styles.art} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.beats} aria-hidden="true">
        <span>Everyone plays</span><span>Everyone reveals</span><span>Everything resolves</span>
      </div>
      <h4 className={styles.modesTitle}>3 Gamemodes</h4>
      <div className={styles.modes}>
        <p className={styles.mode}><strong>Adventure</strong> through 25 story-rich scenarios</p>
        <p className={styles.mode}><strong>Skirmish</strong> in a series of encounters</p>
        <p className={styles.mode}><strong>Clash</strong> competitively with 240 skills</p>
      </div>
    </div>
  );
};

export default TurnRound;
