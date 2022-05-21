import React from 'react'

import articles from '../../../metadata/articlemeta'
import styles from './ArticleList.module.scss'
import ArticleListItem from './ArticleItem'

const ArticleList = ({ category }) => {
  const articleList = articles.filter(p => p.categories.includes(category));

  return <section>
    {articleList.map(article =>
      <div key={article.title} className={styles.article}>
          <ArticleListItem article={article} />
      </div>
    )}
  </section>
}

export default ArticleList
