import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useInView, useReducedMotion } from 'framer-motion';
import ExportedImage from "next-image-export-optimizer";
import styles from './LearnToPlay.module.scss';
import knightClassPic from '../../../public/images/cards/class-knight.webp';
import wardenClassPic from '../../../public/images/cards/class-warden.webp';
import illusionistClassPic from '../../../public/images/cards/class-illusionist.webp';
import reagentClassPic from '../../../public/images/cards/class-reagent.webp';
import doctorClassPic from '../../../public/images/cards/class-doctor.webp';
import solarshaperClassPic from '../../../public/images/cards/class-solarshaper.webp';
import cardBackPic from '../../../public/images/cards/card-back.webp';
import bladestormPic from '../../../public/images/cards/action-bladestorm.webp';
import parryPic from '../../../public/images/cards/action-parry.webp';
import destructiveSmashPic from '../../../public/images/cards/action-destructive-smash.webp';
import tacticalStrikePic from '../../../public/images/cards/action-tactical-strike.webp';
import leafstormPic from '../../../public/images/cards/action-leafstorm.webp';
import hummingbearPic from '../../../public/images/cards/action-hummingbear.webp';
import explosiveFirelotusPic from '../../../public/images/cards/action-explosive-firelotus.webp';
import nickedShotPic from '../../../public/images/cards/action-nicked-shot.webp';
import bodyDoublePic from '../../../public/images/cards/action-body-double.webp';
import deadlyInterjectionPic from '../../../public/images/cards/action-deadly-interjection.webp';
import wearDownPic from '../../../public/images/cards/action-wear-down.webp';
import rattleSensesPic from '../../../public/images/cards/action-rattle-senses.webp';
import chainLightningPic from '../../../public/images/cards/action-chain-lightning.webp';
import meteorPic from '../../../public/images/cards/action-meteor.webp';
import earthquakePic from '../../../public/images/cards/action-earthquake.webp';
import searingBlastPic from '../../../public/images/cards/action-searing-blast.webp';
import contagionPic from '../../../public/images/cards/action-contagion.webp';
import manaJackalopePic from '../../../public/images/cards/action-mana-jackalope.webp';
import anesthesiaPic from '../../../public/images/cards/action-anesthesia.webp';
import sapLifePic from '../../../public/images/cards/action-sap-life.webp';
import wallOfLightPic from '../../../public/images/cards/action-wall-of-light.webp';
import stellarStrikesPic from '../../../public/images/cards/action-stellar-strikes.webp';
import holyFirePic from '../../../public/images/cards/action-holy-fire.webp';
import magnifyBlessingPic from '../../../public/images/cards/action-magnify-blessing.webp';
import basicAttackPic from '../../../public/images/cards/action-basic-attack.webp';
import gatherManaPic from '../../../public/images/cards/action-gather-mana.webp';

const CLASSES = [
  { name: 'Knight', image: knightClassPic, actions: [bladestormPic, parryPic, destructiveSmashPic, tacticalStrikePic] },
  { name: 'Warden', image: wardenClassPic, actions: [leafstormPic, hummingbearPic, explosiveFirelotusPic, nickedShotPic] },
  { name: 'Illusionist', image: illusionistClassPic, actions: [bodyDoublePic, deadlyInterjectionPic, wearDownPic, rattleSensesPic] },
  { name: 'Reagent', image: reagentClassPic, actions: [chainLightningPic, meteorPic, earthquakePic, searingBlastPic] },
  { name: 'Doctor', image: doctorClassPic, actions: [contagionPic, manaJackalopePic, anesthesiaPic, sapLifePic] },
  { name: 'Solarshaper', image: solarshaperClassPic, actions: [wallOfLightPic, stellarStrikesPic, holyFirePic, magnifyBlessingPic] },
];
const PAIRS = [[0, 1], [2, 3], [4, 5], [1, 2], [3, 5], [0, 4]];
const handFor = ([a, b]) => [...CLASSES[a].actions, ...CLASSES[b].actions, basicAttackPic, gatherManaPic];
const HAND_SIZE = 10;

const PICK_MS = 1100;
const DEAL_MS = 240;
const HOLD_MS = 2400;
const SMALL_CARD = "(max-width: 768px) 90px, 130px";

const useLoop = (running, first, next) => {
  const [value, setValue] = useState(first);
  useEffect(() => {
    if (!running) return;
    let timer;
    let current = value;
    const step = () => {
      const [nextValue, delay] = next(current);
      current = nextValue;
      setValue(nextValue);
      timer = setTimeout(step, delay);
    };
    timer = setTimeout(step, next(current)[1]);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);
  return value;
};

const nextRound = ({ pairIndex, dealt }) => {
  if (dealt < HAND_SIZE) {
    return [{ pairIndex, dealt: dealt + 1 }, dealt + 1 === HAND_SIZE ? HOLD_MS : DEAL_MS];
  }
  return [{ pairIndex: (pairIndex + 1) % PAIRS.length, dealt: 0 }, PICK_MS];
};

const LearnToPlay = () => {
  const rootRef = useRef(null);
  const isInView = useInView(rootRef, { margin: "0px 0px -15% 0px" });
  const reduceMotion = useReducedMotion();
  const running = isInView && !reduceMotion;

  const round = useLoop(running, { pairIndex: 0, dealt: 0 }, nextRound);
  const pair = PAIRS[round.pairIndex];
  const hand = handFor(pair);
  const shownCount = reduceMotion ? HAND_SIZE : round.dealt;
  const edgeHand = [hand[1], hand[4], hand[2]];

  return (
    <div ref={rootRef} className={styles.learnToPlay + (running ? " " + styles.running : "")}>
      <h4 className={styles.headline}>Spend less time learning, more time playing!</h4>
      <div className={styles.basics}>
        <Link href='/resources' className={styles.cta}>Learn in 15 minutes</Link>
      </div>
      <div className={styles.steps}>
        <div className={styles.step}>
          <span className={styles.stepNumber} aria-hidden="true">1</span>
          <div className={styles.visual + " " + styles.chooseVisual} aria-hidden="true">
            {CLASSES.map((playerClass, i) => (
              <div
                key={playerClass.name}
                className={styles.classCard + (pair.includes(i) ? " " + styles.picked : "")}
                style={{ "--i": i - (CLASSES.length - 1) / 2 }}>
                <ExportedImage src={playerClass.image} alt="" fill sizes={SMALL_CARD} className={styles.art} />
              </div>
            ))}
          </div>
          <span key={round.pairIndex} className={styles.pairName} aria-hidden="true">
            {CLASSES[pair[0]].name} &amp; {CLASSES[pair[1]].name}
          </span>
          <p className={styles.caption}><strong>Choose</strong> 2 of 6 classes.</p>
        </div>

        <div className={styles.step}>
          <span className={styles.stepNumber} aria-hidden="true">2</span>
          <div
            className={styles.visual + " " + styles.dealVisual + (shownCount === HAND_SIZE ? " " + styles.full : "")}
            aria-hidden="true">
            <div className={styles.deck}>
              <ExportedImage src={cardBackPic} alt="" fill sizes={SMALL_CARD} className={styles.art} />
            </div>
            {hand.map((image, i) => (
              <div
                key={i}
                className={styles.handCard + (i < shownCount ? " " + styles.dealt : "")}
                style={{ "--i": i - (HAND_SIZE - 1) / 2 }}>
                <ExportedImage src={image} alt="" fill sizes={SMALL_CARD} className={styles.art} />
              </div>
            ))}
            <span key={shownCount} className={styles.count}>{shownCount} / {HAND_SIZE}</span>
          </div>
          <p className={styles.caption}><strong>Construct</strong> a hand of 10 cards</p>
        </div>

        <div className={styles.step}>
          <span className={styles.stepNumber} aria-hidden="true">3</span>
          <div
            className={styles.visual + " " + styles.edgeVisual + (shownCount === HAND_SIZE ? " " + styles.go : "")}
            aria-hidden="true">
            {edgeHand.map((image, i) => (
              <div key={i} className={styles.edgeCard + (i === 1 ? " " + styles.edgePlayed : "")} style={{ "--i": i - 1 }}>
                <ExportedImage src={image} alt="" fill sizes={SMALL_CARD} className={styles.art} />
              </div>
            ))}
          </div>
          <p className={styles.caption}><strong>Gain an edge</strong> over the competition!</p>
        </div>
      </div>
    </div>
  );
};

export default LearnToPlay;
