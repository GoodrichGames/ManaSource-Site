import styles from './PageHeader.module.scss';
import Image from "next/image";
import prefix from '../../../utils/prefix';

const PageHeader = ({ title, description, image }) => {
  return (
    <header className={image ? styles.imageHeader : styles.header}>
      {image && <Image
        src={prefix + image}
        alt={title}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          maxWidth: "100%",
        }} />}

      <h1 className={styles.title}>
        {title}
      </h1>

      <p className={styles.description}>
        {description}
      </p>
    </header>
  );
}

export default PageHeader;
