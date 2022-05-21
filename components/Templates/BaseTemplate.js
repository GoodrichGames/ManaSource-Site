import PageHeader from '../content/PageHeader/PageHeader'
import Head from '../Structural/Meta/Meta'
import Navigation from '../Structural/Navigation/Navigation'
import styles from './BaseTemplate.module.scss'

const BaseTemplate = ({ children, title, date, description, image, isArticle }) => {
  return <div className={styles.backgroundWrap}>
    <Head name={title} description={description} image={image} isArticle={isArticle} />
    <Navigation />

    <main className={styles.main}>
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
          Mana Source © Goodrich Games 2022. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
}

export default BaseTemplate
