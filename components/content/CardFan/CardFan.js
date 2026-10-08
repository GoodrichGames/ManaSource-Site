import { useCallback, useEffect, useRef, useState } from 'react';
import ExportedImage from "next-image-export-optimizer";
import styles from './CardFan.module.scss';
import baseStyles from '../../Templates/BaseTemplate.module.scss';
import arrowPic from '../../../public/icons/Arrow.png';
import useTilt from '../Tilt/useTilt';

const FAN_DEGREES = 6;
const FAN_DROP_PX = 8;

const FanCard = ({ card, offset, backImage, onSelect, hasShine }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const tilt = useTilt(10);
  const canFlip = Boolean(backImage) && !onSelect;
  const isClickable = canFlip || Boolean(onSelect);

  const activate = (event) => {
    if (onSelect) onSelect(card, event.currentTarget);
    else setIsFlipped(value => !value);
  };
  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activate(event);
    }
  };
  const clickProps = isClickable ? {
    role: "button",
    tabIndex: 0,
    "aria-label": onSelect ? `${card.alt}, view larger` : `${card.alt}, flip over`,
    ...(onSelect ? {} : { "aria-pressed": isFlipped }),
    onClick: activate,
    onKeyDown,
  } : {};

  return (
    <div
      className={styles.slot}
      style={{ "--fan-angle": `${offset * FAN_DEGREES}deg`, "--fan-drop": `${Math.abs(offset) * Math.abs(offset) * FAN_DROP_PX}px` }}>
      <div
        className={styles.card + (isFlipped ? " " + styles.flipped : "")}
        {...clickProps}
        {...tilt}>
        <div className={styles.inner}>
          <div className={styles.front}>
            <ExportedImage src={card.image} alt={card.alt} fill sizes="(max-width: 768px) 180px, 220px" className={styles.art} />
            {hasShine && <div className={styles.shine} aria-hidden="true" />}
          </div>
          {canFlip && (
            <div className={styles.back} aria-hidden="true">
              <ExportedImage src={backImage} alt="" fill sizes="(max-width: 768px) 180px, 220px" className={styles.art} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RowArrow = ({ direction, disabled, onClick }) => (
  <button
    type="button"
    className={styles.rowArrow + " " + (direction < 0 ? styles.rowArrowLeft : styles.rowArrowRight)}
    aria-label={direction < 0 ? "Previous card" : "Next card"}
    disabled={disabled}
    onClick={onClick}>
    <ExportedImage src={arrowPic} alt="" width="1" height="1" unoptimized={true} sizes="20px" className={baseStyles.glow} />
  </button>
);

const CardFan = ({ cards, shape = "action", backImage, onSelect, hasShine = true, hasArrows = false }) => {
  const fanRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEnds = useCallback(() => {
    const fan = fanRef.current;
    if (!fan) return;
    setAtStart(fan.scrollLeft <= 1);
    setAtEnd(fan.scrollLeft + fan.clientWidth >= fan.scrollWidth - 1);
  }, []);

  useEffect(() => {
    if (!hasArrows) return;
    updateEnds();
    window.addEventListener('resize', updateEnds);
    return () => window.removeEventListener('resize', updateEnds);
  }, [hasArrows, updateEnds]);

  const step = (direction) => {
    const fan = fanRef.current;
    const slots = [...fan.children];
    const centreOf = slot => slot.offsetLeft + slot.offsetWidth / 2 - fan.offsetLeft;
    const middle = fan.scrollLeft + fan.clientWidth / 2;
    const current = slots.reduce((best, slot, i) =>
      Math.abs(centreOf(slot) - middle) < Math.abs(centreOf(slots[best]) - middle) ? i : best, 0);
    const target = slots[Math.min(Math.max(current + direction, 0), slots.length - 1)];
    fan.scrollTo({ left: centreOf(target) - fan.clientWidth / 2, behavior: 'smooth' });
  };

  const fan = (
    <div
      ref={fanRef}
      className={styles.fan + " " + styles[shape] + (hasArrows ? " " + styles.withArrows : "")}
      onScroll={hasArrows ? updateEnds : undefined}>
      {cards.map((card, i) => (
        <FanCard key={card.alt} card={card} offset={i - (cards.length - 1) / 2} backImage={backImage} onSelect={onSelect} hasShine={hasShine} />
      ))}
    </div>
  );

  if (!hasArrows) return fan;
  return (
    <div className={styles.fanWrap}>
      <RowArrow direction={-1} disabled={atStart} onClick={() => step(-1)} />
      {fan}
      <RowArrow direction={1} disabled={atEnd} onClick={() => step(1)} />
    </div>
  );
};

export default CardFan;
