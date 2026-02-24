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

  return (
    <div
      className={`${styles.container} ${isActive ? 'active' : ''} ${className}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
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
