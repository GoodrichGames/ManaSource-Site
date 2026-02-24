import styles from './PageHeader.module.scss';
import ExportedImage from "next-image-export-optimizer";

const PageHeader = ({ title, description, image }) => {
  const usedImage = image || "/images/Moonlight.jpg";
  return (
    <header className={styles.imageHeader}>
      <ExportedImage
        src={usedImage}
        alt={title}
        fill
        sizes="100vw"
        style={{
          maxWidth: "100%",
        }} />

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
