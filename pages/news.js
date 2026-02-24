import BaseLayout from '../components/Templates/BaseTemplate';
import styles from '../components/Templates/BaseTemplate.module.scss';
import ArticleList from '../components/content/ArticleList/ArticleList';
import InfoBox from '../components/content/InfoBox/InfoBox';
import ContentItem from './../components/content/ContentSection/ContentItem';
import ContentSection from './../components/content/ContentSection/ContentSection';

export default function News() {
  return (
    <BaseLayout title="News" description="Latest Mana Source updates, news, and balance changes.">
      <ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContentItem>
        <h1 className={styles.logo + " " + styles.tCenter}>Mana Source News</h1>
        </ContentItem>
        <br />
        <br />
        </ContentSection>
        <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.golemNewsBg + " " + styles.fullW}>
              <InfoBox classes={styles.mLauto + " " + styles.maxW960}>
                <ArticleList category="all" expandByYear={true} />
              </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseLayout>
  )
}
