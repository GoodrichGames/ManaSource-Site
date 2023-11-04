import BaseLayout from '../components/Templates/BaseTemplate'
import ArticleList from '../components/content/ArticleList/ArticleList'
import meta from '../metadata/pagemeta'
import ExportedImage from "next-image-export-optimizer";
import prefix from '../utils/prefix';
import styles from '../components/Templates/BaseTemplate.module.scss'
import ContentItem from '../components/content/ContentSection/ContentItem'
import ContentSection from './../components/content/ContentSection/ContentSection';
import Link from 'next/link'
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import YoutubeEmbed from './../components/content/YoutubeEmbed/YoutubeEmbed';

export default function Home() {
  return (
    <BaseLayout title={meta.name} description={meta.description} >
      <div className={styles.heroImage}>
        <ExportedImage src={prefix + '/images/featured-game.webp'} alt='mana well in cave' width="100%" height="100%" layout="responsive" objectFit="contain" priority={true} />
      </div>
      <ContentSection>
        <ContentItem>
          <p className={styles.fontPhilosopher}>
            <em>
              For thousands of years the nations have fought to control Mana wells, which are now essential to modern life. <br />
              Each nation has unique weapons, talents, and battlefield-warping effects to emerge victorious.<br />
              But be careful, each opponent may have a few tricks they&apos;ve picked up from another nation...
            </em>
          </p>
          <br />
          <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} />
          <br />
          <h4 className={styles.tCenter + " " + styles.medWPadding}>
            <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game with deadly adversaries.</div>
            <div>You&apos;ll need to rely on your wits to survive.</div>
          </h4>
          <p className={styles.tCenter + " " + styles.medWPadding + " " + styles.vAlignTop}>
            Choose a primary and secondary class – Construct a hand of 10 cards – Gain an edge over the competition!<br /><br />
          </p><br />
          <div className={styles.medWPadding}>
            <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
              <h4>Don&apos;t wait for your turn to play!</h4>
              Simultaneous turns keep everyone focused on the action.
            </div>
            <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
              <h4>Spend less time learning, more time playing!</h4>
              You can <Link href='/resources'>learn the basics</Link> in &lt; 10 minutes.
            </div>
            <div className={styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " "}>
              <h4>How much game are we talking here?</h4>
              Campaign: 20+ story-rich scenarios<br />
              Clash competitively with 300+ skills<br />
            </div>
          </div>
          <br />
          <p className={styles.tCenter}>
            Visit the <Link href='/about'>About</Link> or <Link href='/resources'>Resources</Link> pages to learn more.
          </p>
          <EmailSignup ctaText="Start your adventure!" />
        </ContentItem>
      </ContentSection>
      <ContentSection>
        <ContentItem title='Latest Articles'>
          <ArticleList category="all" />
        </ContentItem>
      </ContentSection>
    </BaseLayout>
  )
}
