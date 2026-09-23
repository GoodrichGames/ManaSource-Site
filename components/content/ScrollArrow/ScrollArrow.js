import ExportedImage from "next-image-export-optimizer";
import styles from '../../Templates/BaseTemplate.module.scss';
import arrowPic from '../../../public/icons/Arrow.png';

const ScrollArrow = ({ href, classes = "", preload = false }) => (
  <a className={styles.scrollArrow + " " + classes + " " + styles.glow} href={href}>
    <ExportedImage
      src={arrowPic}
      alt='down arrow'
      height="1"
      width="1"
      preload={preload}
      unoptimized={true}
      sizes="20px"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }} />
  </a>
);

export default ScrollArrow;
