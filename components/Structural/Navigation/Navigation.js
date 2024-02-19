import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Navigation.module.scss'

const homeUrl = '/';
const aboutUrl = '/#main';
const newsUrl = '/#news';
const resourcesUrl = '/resources';
const contactUsUrl = '/contactus';

const Navigation = (props) => {
  const router = useRouter()
  const activeRoute = `/${router.pathname.split('/')[1]}`

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation}>
        <div className={styles.navigationTop}>
          <div className={styles.navigationOverlay}>
            {!props.disableLinks && <ul>
              <li key='home' className={activeRoute === homeUrl ? styles.selected : ''}>
                <Link href={homeUrl} className={styles.menu1}>
                  
                    Home
                  
                </Link>
              </li>
              <li key='about' className={activeRoute === aboutUrl ? styles.selected : ''}>
                <Link href={aboutUrl} className={styles.menu2}>
                  
                    About
                  
                </Link>
              </li>
              <li key='news' className={activeRoute === newsUrl ? styles.selected : ''}>
                <Link href={newsUrl} className={styles.menu3}>
                  
                    News
                  
                </Link>
              </li>
              <li key='resources' className={activeRoute === resourcesUrl ? styles.selected : ''}>
                <Link href={resourcesUrl} className={styles.menu4}>
                  
                    Resources
                  
                </Link>
              </li>
              <li key='contactus' className={activeRoute === contactUsUrl ? styles.selected : ''}>
                <Link href={contactUsUrl} className={styles.menu5}>
                  
                    Contact Us
                  
                </Link>
              </li>
            </ul>}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation
