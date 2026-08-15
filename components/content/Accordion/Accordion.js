import styles from './Accordion.module.scss'
import { useId, useState } from 'react';

const Accordion = ({ children, title, defaultExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(Boolean(defaultExpanded));
  const contentId = useId();

  return (
    <div className={styles.accordion + ' ' + (isExpanded ? styles.expanded : '')}>
      <button
        type="button"
        className={styles.accordionTitle}
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {title}
      </button>
      <div
        id={contentId}
        className={styles.accordionContent}
        aria-hidden={!isExpanded}
      >
        <div className={styles.accordionContentInner}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion;
