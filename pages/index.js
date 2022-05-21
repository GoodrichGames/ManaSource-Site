import BaseLayout from '../components/Templates/BaseTemplate'
import PostList from '../components/content/ArticleList/ArticleList'
import meta from '../metadata/pagemeta'
import Image from 'next/image'
import styles from '../components/Templates/BaseTemplate.module.scss'

export default function Home() {
  return (
    <BaseLayout title={meta.name} description={meta.description} >
      <div className={styles.heroImage}>
        <Image src='/images/featured-game.png' alt='mana well in cave' width="100%" height="100%" layout="responsive" objectFit="contain" priority={true} />
      </div>
      <section>
        <ul>
          <li>
            <div>
              <p>
                <em>
                  For thousands of years nations have fought to control Mana Sources, which are now essential to modern life. <br />
                  Each nation has unique weapons, talents, and battlefield-warping effects to emerge victorious.<br />
                  But be careful, each opponent may have a few tricks they&apos;ve picked up from another nation...
                </em>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <h3>Latest Articles</h3>
            <PostList category="all" />
          </li>
        </ul>
      </section>
    </BaseLayout>
  )
}
