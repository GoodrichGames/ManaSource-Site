import Link from 'next/link'
import PageHeader from '../content/PageHeader/PageHeader'
import Head from '../Structural/Meta/Meta'
import styles from './BaseTemplate.module.scss'
import Navigation from './../Structural/Navigation/Navigation';
import ConsentSettingsButton from '../Structural/Consent/ConsentSettingsButton';

const NoNavTemplate = ({ children, title, date, description, image, isArticle, classes }) => {
  return <div className={styles.backgroundWrap + (classes ? " " + classes : "")}>
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
        <div className={styles.footerPool} aria-hidden="true">
          <div className={styles.poolSpill}></div>
          <div className={styles.poolWater}></div>
          <div className={styles.poolShimmer}></div>
          <div className={styles.poolLip}></div>
          <div className={styles.poolMist}></div>
          <div className={styles.poolMotes}>
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <p>
          Mana Source © Goodrich Games 2026. All rights reserved.
        </p>
        <p className={styles.footerLinks}>
          <Link href="/privacy">Privacy Policy</Link>
          <span aria-hidden="true"> · </span>
          <ConsentSettingsButton />
        </p>
      </div>
    </footer>
  </div>
}

export default NoNavTemplate;
