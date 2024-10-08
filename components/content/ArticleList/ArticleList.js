import articles from '../../../metadata/articlemeta'
import styles from './ArticleList.module.scss'
import ArticleListItem from './ArticleItem'

const ArticleList = ({ category, max }) => {
  const articleList = articles.filter(p => p.categories.includes(category)).slice(0, max);

  return <div>
    {articleList.map(article =>
      <div key={article.title} className={styles.article}>
          <ArticleListItem article={article} />
      </div>
    )}
  </div>
}

export default ArticleList
