import BaseLayout from '../components/Templates/BaseTemplate'
import ArticleList from '../components/content/ArticleList/ArticleList'
import meta from '../metadata/pagemeta'
import ExportedImage from "next-image-export-optimizer";
import prefix from '../utils/prefix';
import styles from '../components/Templates/BaseTemplate.module.scss'
import ContentItem from '../components/content/ContentSection/ContentItem'
import ContentSection from './../components/content/ContentSection/ContentSection';
import Link from 'next/link'

export default function Home() {
  return (
    <BaseLayout title={meta.name} description={meta.description} >
      <div className={styles.heroImage}>
        <ExportedImage src={prefix + '/images/featured-game.png'} alt='mana well in cave' width="100%" height="100%" layout="responsive" objectFit="contain" priority={true} />
      </div>
      <ContentSection>
        <ContentItem>
          <p>
            <em>
              For thousands of years nations have fought to control Mana Sources, which are now essential to modern life. <br />
              Each nation has unique weapons, talents, and battlefield-warping effects to emerge victorious.<br />
              But be careful, each opponent may have a few tricks they&apos;ve picked up from another nation...
            </em>
          </p>
          <br />
          <p>
            Mana Source is a combat card game of wits and resource management that can be played cooperatively or competitively.
          </p>
          <p>
            Players choose a primary and secondary class, construct a hand of 9 cards, and then utilize attack, talent,
            and unique nation card types to reduce their opponent&apos;s health to zero and win!  Mana Source utilizes simultaneous
            turns for low downtime, is easy for new players to learn compared to most other strategy card games, but still
            has depth and longevity for strategists.
          </p>
          <p>
            To learn more, visit the <Link href='/about'>About</Link> or <Link href='/resources'>Resources</Link> pages.
          </p>
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
