import { motion } from 'framer-motion';
import styles from '../../Templates/BaseTemplate.module.scss';

const headingVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const letterVariants = {
  hidden: { opacity: 0.15, textShadow: "0 0 0px rgba(240, 220, 156, 0)" },
  visible: {
    opacity: 1,
    textShadow: ["0 0 0px rgba(240, 220, 156, 0)", "0 0 18px rgba(240, 220, 156, 1)", "0 0 12px rgba(240, 220, 156, 0.3)"],
    transition: { duration: 0.7 },
  },
};

const SectionHeading = ({ children }) => (
  <motion.h3
    className={styles.tCenter}
    aria-label={children}
    variants={headingVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.6 }}>
    {[...children].map((letter, i) => (
      <motion.span key={i} className={styles.headingLetter} variants={letterVariants} aria-hidden="true">{letter}</motion.span>
    ))}
  </motion.h3>
);

export default SectionHeading;
