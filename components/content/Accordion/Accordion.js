import styles from './Accordion.module.scss'
import { useState } from 'react';

const doAccordionAnimation = (accordion, expanded) => {
  // TODO: Implement
}

const Accordion = ({ children, title, defaultExpanded }) => {
  const [isExpanded, setUseExpanded] = useState(defaultExpanded);

  const onClickHandler = (e) => {
    doAccordionAnimation(e.target, isExpanded);
    setUseExpanded(!isExpanded);
  };

  return (
    <div className={styles.accordion + ' ' + (isExpanded ? styles.expanded : '')}>
      <div className={styles.accordionTitle} onClick={onClickHandler}>
        {title}
      </div>
      <div className={styles.accordionContent}>
        {children}
      </div>
    </div>
  )
}

export default Accordion;
