import Image from "next/image";
import ggLogo from '../../public/images/GG-Logo-dark-bg.png';
import Head from '../Structural/Meta/Meta';
import Navigation from '../Structural/Navigation/Navigation';
import PageHeader from '../content/PageHeader/PageHeader';
import styles from './BaseTemplate.module.scss';
import { GoogleAnalytics } from '@next/third-parties/google'

const BaseTemplate = ({ children, title, date, description, image, isArticle, classes }) => {
  return (
    <div className={styles.backgroundWrap + " " + classes}>
      <Head name={title} description={description} image={image} isArticle={isArticle} />
      <GoogleAnalytics gaId="G-Q13V1EJW9Q" />
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
            Mana Source © Goodrich Games 2024. All rights reserved.
          </p>
          <br />
          <div className={styles.maxH100}>
          <Image
            src={ggLogo}
            alt='Goodrich Games Logo'
            width={0}
            height={100}
            style={{
              objectFit: "contain",
              maxWidth: "100%",
              height: "auto"
            }} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BaseTemplate;
