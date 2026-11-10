import React, { useState } from 'react';
import styles from './HoverReveal.module.scss';

export default function HoverReveal({ title = '', description = null, className = '', children = null }) {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => setIsActive(v => !v);

  const handleKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleActive();
    }
  }

  const handlePointerEnter = (e) => { if (e.pointerType === 'mouse') setIsActive(true); };
  const handlePointerLeave = (e) => { if (e.pointerType === 'mouse') setIsActive(false); };

  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ''} ${className}`}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onClick={toggleActive}
      onKeyDown={handleKey}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
    >
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.title} aria-hidden={isActive ? 'true' : 'false'}>{title}</div>

      <div className={styles.description} aria-hidden={isActive ? 'false' : 'true'}>
        {description || children}
      </div>
    </div>
  );
}
