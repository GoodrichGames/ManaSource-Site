import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navigation.module.scss'
import { useEffect, useState } from 'react';

const homeUrl = '/';
const aboutUrl = '/#main';
const newsUrl = '/#news';
const resourcesUrl = '/resources';
const contactUsUrl = '/contactus';

const Navigation = (props) => {
  const router = useRouter()
  const activeRoute = `/${router.pathname.split('/')[1]}`
  const [activeHomeSection, setActiveHomeSection] = useState('home');

  useEffect(() => {
    if (router.pathname !== '/') return;

    let animationFrame;

    const updateActiveSection = () => {
      const mainSection = document.getElementById('main');
      const newsSection = document.getElementById('news');
      const sectionOffset = 100;

      if (newsSection && window.scrollY >= newsSection.offsetTop - sectionOffset) {
        setActiveHomeSection('news');
      } else if (mainSection && window.scrollY >= mainSection.offsetTop - sectionOffset) {
        setActiveHomeSection('about');
      } else {
        setActiveHomeSection('home');
      }
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('hashchange', scheduleUpdate);
    window.addEventListener('load', scheduleUpdate);
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
      window.removeEventListener('load', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [router.pathname]);

  const isHomeSectionActive = (section) => activeRoute === homeUrl && activeHomeSection === section;

  return (
    <nav className={styles.navigation}> 
      <div className={styles.navigation}>
        <div className={styles.navigationTop}>
          <div className={styles.navigationOverlay}>
            {!props.disableLinks && <ul>
              <li key='home' className={isHomeSectionActive('home') ? styles.selected : ''}>
                <Link href={homeUrl} className={styles.menu1}>
                  
                    Home
                  
                </Link>
              </li>
              <li key='about' className={isHomeSectionActive('about') ? styles.selected : ''}>
                <Link href={aboutUrl} className={styles.menu2}>
                  
                    About
                  
                </Link>
              </li>
              <li key='news' className={isHomeSectionActive('news') ? styles.selected : ''}>
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
