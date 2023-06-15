import styles from './ArticleList.module.scss'
import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";
import prefix from '../../../utils/prefix';

const ArticleItem = ({ article }) => {
  return <Link href={article.link}>
    <a className={styles.articleLink}>
      <div className={styles.imageContainer}>
        <ExportedImage src={prefix + article.image} alt={article.title} layout="fill" className={article.imageVAlign} />
      </div>
      <div className={styles.articleContent}>
        {article.date && <date>{article.date}</date>}
        <div className={styles.articleTitle}>
          {article.title}
        </div>
        <p>{article.description}</p>
      </div>
    </a>
  </Link>
};

export default ArticleItem
