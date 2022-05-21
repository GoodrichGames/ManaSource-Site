import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import meta from '../../../metadata/pagemeta'
import styles from './Navigation.module.scss'

const homeUrl = '/';
const aboutUrl = '/about';
const newsUrl = '/news';
const resourcesUrl = '/resources';
const contactUsUrl = '/contactus';

const Navigation = () => {
  const router = useRouter()
  const activeRoute = `/${router.pathname.split('/')[1]}`

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation}>
        <div className={styles.navigationTop}>
          <Link href="/">
            <a className={styles.logo}>
              Mana Source
            </a>
          </Link>
          <div className={styles.navigationOverlay}>
            <ul>
              <li key='home' className={activeRoute === homeUrl ? styles.selected : ''}>
                <Link href={homeUrl}>
                  <a className={styles.menu1}>
                    Home
                  </a>
                </Link>
              </li>
              <li key='about' className={activeRoute === aboutUrl ? styles.selected : ''}>
                <Link href={aboutUrl}>
                  <a className={styles.menu2}>
                    About
                  </a>
                </Link>
              </li>
              <li key='news' className={activeRoute === newsUrl ? styles.selected : ''}>
                <Link href={newsUrl}>
                  <a className={styles.menu3}>
                    News
                  </a>
                </Link>
              </li>
              <li key='resources' className={activeRoute === resourcesUrl ? styles.selected : ''}>
                <Link href={resourcesUrl}>
                  <a className={styles.menu4}>
                    Resources
                  </a>
                </Link>
              </li>
              <li key='contactus' className={activeRoute === contactUsUrl ? styles.selected : ''}>
                <Link href={contactUsUrl}>
                  <a className={styles.menu5}>
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
