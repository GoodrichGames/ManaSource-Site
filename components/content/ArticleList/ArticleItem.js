import styles from './ArticleList.module.scss'
import ExportedImage from "next-image-export-optimizer";

const toIsoDate = (displayDate) => {
  const months = {
    jan: '01', january: '01', feb: '02', february: '02', mar: '03', march: '03',
    apr: '04', april: '04', may: '05', jun: '06', june: '06', jul: '07', july: '07',
    aug: '08', august: '08', sep: '09', sept: '09', september: '09', oct: '10',
    october: '10', nov: '11', november: '11', dec: '12', december: '12',
  };
  const match = displayDate.match(/^([A-Za-z]+)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})$/);

  if (!match) return undefined;

  const month = months[match[1].toLowerCase()];
  if (!month) return undefined;

  return `${match[3]}-${month}-${match[2].padStart(2, '0')}`;
};

const ArticleItem = ({ article }) => {
  return (
    <a href={article.link} className={styles.articleLink}>
        <div className={styles.imageContainer}>
          <ExportedImage
            src={article.image}
            alt={article.title}
            className={article.imageVAlign}
            fill
            sizes="(min-width: 767px) 200px, 100vw"
            style={{
              maxWidth: "100%",
            }} />
        </div>
        <div className={styles.articleContent}>
          {article.date && <time dateTime={toIsoDate(article.date)}>{article.date}</time>}
          <div className={styles.articleTitle}>
            {article.title}
          </div>
          <p>{article.description}</p>
        </div>
      </a>
  );
};

export default ArticleItem
