import styles from './PageHeader.module.scss';
import ExportedImage from "next-image-export-optimizer";
import prefix from '../../../utils/prefix';

const PageHeader = ({ title, description, image }) => {
  return (
    <header className={image ? styles.imageHeader : styles.header}>
      {image && <ExportedImage src={prefix + image} alt={title} layout='fill' />}

      <h1 className={styles.title}>
        {title}
      </h1>

      <p className={styles.description}>
        {description}
      </p>
    </header>
  )
}

export default PageHeader;