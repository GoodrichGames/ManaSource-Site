import React, { useState } from 'react'
import articles from '../../../metadata/articlemeta'
import styles from './ArticleList.module.scss'
import ArticleListItem from './ArticleItem'

const extractYear = (dateString) => {
  if (!dateString) return 'Unknown';
  const match = String(dateString).match(/(\d{4})\b/);
  if (match) return match[1];
  const parsed = new Date(dateString);
  if (!isNaN(parsed.getFullYear())) return String(parsed.getFullYear());
  return 'Unknown';
}

const ArticleList = ({ category, max, expandByYear = false }) => {
  const filteredArticles = articles.filter(post => post.categories.includes(category)).slice(0, max);

  const groupsByYear = filteredArticles.reduce((groupsMap, articleItem) => {
    const yearKey = extractYear(articleItem.date);
    if (!groupsMap[yearKey]) groupsMap[yearKey] = [];
    groupsMap[yearKey].push(articleItem);
    return groupsMap;
  }, {});

  const yearsList = Object.keys(groupsByYear).sort((yearA, yearB) => Number(yearB) - Number(yearA));

  const [expandedYears, setExpandedYears] = useState(() => {
    const initial = {};
    if (yearsList.length) initial[yearsList[0]] = true;
    return initial;
  });

  if (!expandByYear) {
    return (
      <div>
        {filteredArticles.map(article => (
          <div key={article.title} className={styles.article}>
            <ArticleListItem article={article} />
          </div>
        ))}
      </div>
    );
  }

  const toggleYear = (yearKey) => setExpandedYears(prevState => ({ ...prevState, [yearKey]: !prevState[yearKey] }));

  return (
    <div>
      {yearsList.map(yearKey => (
        <div key={yearKey} style={{ marginBottom: 16 }}>
          <div style={{ cursor: 'pointer', fontWeight: '600', marginBottom: 8 }} onClick={() => toggleYear(yearKey)}>
            {yearKey} ({groupsByYear[yearKey].length}) {expandedYears[yearKey] ? '▾' : '▸'}
          </div>
          {expandedYears[yearKey] && (
            <div>
              {groupsByYear[yearKey].map(articleEntry => (
                <div key={articleEntry.title} className={styles.article}>
                  <ArticleListItem article={articleEntry} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ArticleList
