import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ExportedImage from "next-image-export-optimizer";
import styles from './ClassHand.module.scss';
import CardFan from '../CardFan/CardFan';
import knightClassPic from '../../../public/images/cards/class-knight.jpg';
import wardenClassPic from '../../../public/images/cards/class-warden.jpg';
import illusionistClassPic from '../../../public/images/cards/class-illusionist.jpg';
import reagentClassPic from '../../../public/images/cards/class-reagent.jpg';
import doctorClassPic from '../../../public/images/cards/class-doctor.jpg';
import solarshaperClassPic from '../../../public/images/cards/class-solarshaper.jpg';
import bladestormPic from '../../../public/images/cards/action-bladestorm.jpg';
import parryPic from '../../../public/images/cards/action-parry.jpg';
import destructiveSmashPic from '../../../public/images/cards/action-destructive-smash.jpg';
import leafstormPic from '../../../public/images/cards/action-leafstorm.jpg';
import hummingbearPic from '../../../public/images/cards/action-hummingbear.jpg';
import explosiveFirelotusPic from '../../../public/images/cards/action-explosive-firelotus.jpg';
import bodyDoublePic from '../../../public/images/cards/action-body-double.jpg';
import deadlyInterjectionPic from '../../../public/images/cards/action-deadly-interjection.jpg';
import wearDownPic from '../../../public/images/cards/action-wear-down.jpg';
import chainLightningPic from '../../../public/images/cards/action-chain-lightning.jpg';
import meteorPic from '../../../public/images/cards/action-meteor.jpg';
import earthquakePic from '../../../public/images/cards/action-earthquake.jpg';
import contagionPic from '../../../public/images/cards/action-contagion.jpg';
import manaJackalopePic from '../../../public/images/cards/action-mana-jackalope.jpg';
import anesthesiaPic from '../../../public/images/cards/action-anesthesia.jpg';
import wallOfLightPic from '../../../public/images/cards/action-wall-of-light.jpg';
import stellarStrikesPic from '../../../public/images/cards/action-stellar-strikes.jpg';
import holyFirePic from '../../../public/images/cards/action-holy-fire.jpg';
import cardBackPic from '../../../public/images/cards/card-back.jpg';

const CLASSES = [
  {
    name: 'Knight', image: knightClassPic, alt: 'Knight class card',
    actions: [
      { image: bladestormPic, alt: 'Bladestorm action card' },
      { image: parryPic, alt: 'Parry action card' },
      { image: destructiveSmashPic, alt: 'Destructive Smash action card' },
    ],
  },
  {
    name: 'Warden', image: wardenClassPic, alt: 'Warden class card',
    actions: [
      { image: leafstormPic, alt: 'Leafstorm action card' },
      { image: hummingbearPic, alt: 'Hummingbear action card' },
      { image: explosiveFirelotusPic, alt: 'Explosive Firelotus action card' },
    ],
  },
  {
    name: 'Illusionist', image: illusionistClassPic, alt: 'Illusionist class card',
    actions: [
      { image: bodyDoublePic, alt: 'Body Double action card' },
      { image: deadlyInterjectionPic, alt: 'Deadly Interjection action card' },
      { image: wearDownPic, alt: 'Wear Down action card' },
    ],
  },
  {
    name: 'Reagent', image: reagentClassPic, alt: 'Reagent class card',
    actions: [
      { image: chainLightningPic, alt: 'Chain Lightning action card' },
      { image: meteorPic, alt: 'Meteor action card' },
      { image: earthquakePic, alt: 'Earthquake action card' },
    ],
  },
  {
    name: 'Doctor', image: doctorClassPic, alt: 'Doctor class card',
    actions: [
      { image: contagionPic, alt: 'Contagion action card' },
      { image: manaJackalopePic, alt: 'Mana Jackalope action card' },
      { image: anesthesiaPic, alt: 'Anesthesia action card' },
    ],
  },
  {
    name: 'Solarshaper', image: solarshaperClassPic, alt: 'Solarshaper class card',
    actions: [
      { image: wallOfLightPic, alt: 'Wall of Light action card' },
      { image: stellarStrikesPic, alt: 'Stellar Strikes action card' },
      { image: holyFirePic, alt: 'Holy Fire action card' },
    ],
  },
];

const ClassCloseUp = ({ chosen, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`${chosen.name} class`}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}>
      <div className={styles.stage} onClick={event => event.stopPropagation()}>
        <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close">×</button>
        <motion.div
          className={styles.bigCard}
          initial={{ opacity: 0, scale: 0.6, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}>
          <ExportedImage src={chosen.image} alt={chosen.alt} fill sizes="(max-width: 1100px) 90vw, 620px" className={styles.art} />
        </motion.div>
        <motion.div
          className={styles.examples}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.15, duration: 0.35 }}>
          <CardFan cards={chosen.actions} shape="action" backImage={cardBackPic} hasShine={false} />
        </motion.div>
      </div>
    </motion.div>
  );
};

const ClassHand = () => {
  const [chosen, setChosen] = useState(null);
  const [hasOpened, setHasOpened] = useState(false);
  const openerRef = useRef(null);

  const open = (card, element) => {
    openerRef.current = element;
    setHasOpened(true);
    setChosen(card);
  };
  const close = useCallback(() => {
    setChosen(null);
    openerRef.current?.focus();
  }, []);

  return (
    <>
      <CardFan cards={CLASSES} shape="class" onSelect={open} hasShine={false} hasArrows={true} />
      {hasOpened && createPortal(
        <AnimatePresence>
          {chosen && <ClassCloseUp key={chosen.name} chosen={chosen} onClose={close} />}
        </AnimatePresence>,
        document.body)}
    </>
  );
};

export default ClassHand;
