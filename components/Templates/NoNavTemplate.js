import PageHeader from '../content/PageHeader/PageHeader'
import Head from '../Structural/Meta/Meta'
import styles from './BaseTemplate.module.scss'
import Navigation from './../Structural/Navigation/Navigation';

const NoNavTemplate = ({ children, title, date, description, image, isArticle }) => {
  return <div className={styles.backgroundWrap}>
    <Head name={title} description={description} image={image} isArticle={isArticle} />

    <Navigation disableLinks={true} />
    <main className={styles.main + " " + styles.mainNoLinks}>
      <div className={styles.bodyWrapper}>
        <div className={styles.bodyContent}>
          {isArticle && <PageHeader title={title} date={date} description={description} image={image} />}
          {children}
        </div>
      </div>
    </main>

    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>
          Mana Source © Goodrich Games 2026. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
}

export default NoNavTemplate;
