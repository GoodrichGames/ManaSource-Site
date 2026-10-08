import { useState } from 'react';
import styles from './InfoBox.module.scss';
import { motion } from "framer-motion"

const InfoBox = ({ children, classes = "", delay = 0.5, variant = "framed" }) => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const isOffset = classes.includes('offset');

  return (
    <motion.div
      className={[
        styles.infoBox,
        styles[variant],
        isOffset ? "" : (isUnfolded ? styles.unfolded : styles.folded),
        classes,
      ].join(" ")}
      style={isOffset ? undefined : { "--unfold-delay": `${delay}s` }}
      onViewportEnter={() => setIsUnfolded(true)}
      viewport={{ once: true, amount: 0.15 }}
    >
      {variant === "framed" && !isOffset && (
        <svg className={styles.trace} aria-hidden="true" focusable="false">
          <rect width="100%" height="100%" pathLength="1" />
        </svg>
      )}
      {children}
    </motion.div>
  )
}

export default InfoBox;
