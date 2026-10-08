import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import ggLogo from '../../public/images/GG-Logo-dark-bg.png';
import pageBackground from '../../public/images/bg-page.png';
import Head from '../Structural/Meta/Meta';
import Navigation from '../Structural/Navigation/Navigation';
import PageHeader from '../content/PageHeader/PageHeader';
import ConsentSettingsButton from '../Structural/Consent/ConsentSettingsButton';
import styles from './BaseTemplate.module.scss';

const BaseTemplate = ({ children, title, date, description, image, isArticle, classes }) => {
  const wrapperClassName = `${styles.backgroundWrap}${classes ? ` ${classes}` : ''}`;

  return (
    <div className={wrapperClassName}>
      <ExportedImage
        className={styles.backgroundImage}
        src={pageBackground}
        alt=""
        aria-hidden="true"
        role="presentation"
        fill
        priority
        sizes="100vw"
      />
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
          <span className="spacer1" aria-hidden="true"></span>
          <div className={styles.maxH100}>
          <ExportedImage
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
