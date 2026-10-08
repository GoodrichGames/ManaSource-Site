import { useState } from 'react';
import ExportedImage from "next-image-export-optimizer";
import wordmarkPic from '../../../public/images/ManaSourceWordmark.png';
import styles from './BrandName.module.scss';

const BrandName = ({ large = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <span className={styles.brandName + (large ? " " + styles.large : "") + (isLoaded ? " " + styles.loaded : "")}>
      <span className={styles.text}>Mana Source</span>
      <ExportedImage
        src={wordmarkPic}
        alt=""
        aria-hidden="true"
        height={0}
        width={0}
        sizes={large ? "480px" : "240px"}
        placeholder="empty"
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        className={styles.image} />
    </span>
  );
};

export default BrandName;
