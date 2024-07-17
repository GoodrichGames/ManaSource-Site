import styles from './ArticleList.module.scss'
import Link from 'next/link'
import prefix from '../../../utils/prefix';
import ExportedImage from "next-image-export-optimizer";

const ArticleItem = ({ article }) => {
  return (
    <a href={article.link} className={styles.articleLink}>
        <div className={styles.imageContainer}>
          <ExportedImage
            src={prefix + article.image}
            alt={article.title}
            className={article.imageVAlign}
            fill
            sizes="100vw"
            style={{
              maxWidth: "100%",
            }} />
        </div>
        <div className={styles.articleContent}>
          {article.date && <date>{article.date}</date>}
          <div className={styles.articleTitle}>
            {article.title}
          </div>
          <p>{article.description}</p>
        </div>
      </a>
  );
};

export default ArticleItem
