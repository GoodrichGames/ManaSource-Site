import styles from './InfoBox.module.scss';
import { motion } from "framer-motion"

const variant = {
  visible: { opacity: 1, transform: "translateY(0px)" },
  hidden: { opacity: 0, transform: "translateY(20px)" },
};

const offsetVariant = {
  visible: { opacity: 1, transform: "translateY(calc(-100% - 20px))" },
  hidden: { opacity: 0, transform: "translateY(0px)" },
};

const InfoBox = ({ children, classes, delay }) => {
  return (
    <motion.div
      className={styles.infoBox + " " + classes}
      variants={classes?.includes('offset') ? '' : variant}
      initial="hidden"
      whileInView="visible"
      transition={{ delay: delay ? delay : .5, duration: 1 }}
      viewport={{ once: true }}
    >
        {children}
    </motion.div>
  )
}

export default InfoBox;
