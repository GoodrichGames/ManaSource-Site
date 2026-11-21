import { useState } from 'react';
import ExportedImage from "next-image-export-optimizer";
import wordmarkPic from '../../../public/images/ManaSourceWordmark.webp';
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
        sizes={large ? "(min-width: 1834px) 300px, (min-width: 1500px) 16.3vw, 245px" : "240px"}
        placeholder="empty"
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        className={styles.image} />
    </span>
  );
};

export default BrandName;
