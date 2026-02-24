import styles from '../../Templates/BaseTemplate.module.scss';

export default function ArticleBlock({ wrapperClassName = '', children }) {
  return (
    <>
      <div className={styles.SectionHeader} />
      <div className={styles.maxW960 + " " + styles.center}>
        <ul>
          <li>
            <div className={wrapperClassName}>
              {children}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
