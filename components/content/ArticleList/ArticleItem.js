import Image from 'next/image'
import styles from './ArticleList.module.scss'
import Link from 'next/link'

const ArticleItem = ({ article }) => {
  return <Link href={article.link}>
    <a className={styles.articleLink}>
      <div className={styles.imageContainer}>
        <Image src={article.image} alt={article.title} layout="fill" />
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
