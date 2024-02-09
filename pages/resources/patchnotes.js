
import ContentItem from './../../components/content/ContentSection/ContentItem';
import ArticleList from './../../components/content/ArticleList/ArticleList';
import BaseTemplate from './../../components/Templates/BaseTemplate';
import ContentSection from './../../components/content/ContentSection/ContentSection';
import InfoBox from './../../components/content/InfoBox/InfoBox';
import styles from './../../components/Templates/BaseTemplate.module.scss'

export default function PatchNotes() {
  return (<BaseTemplate title="Patch Notes" description="The latest game updates.">
    <ContentSection>
      <br />
      <br />
      <br />
      <br />
      <br />
      <ContentItem>
        <h1 className={styles.logo + " " + styles.tCenter}>Latest Patch Notes</h1>
      </ContentItem>
      <br />
      <br />
    </ContentSection>
    <ContentSection>
      <ContentItem classes={styles.tCenter + " " + styles.timbatiaBg + " " + styles.fullW}>
        <InfoBox classes={styles.fullW}>
          <br />
          <br />
          Come back here when the game launches!
          <br />
          <br />
        </InfoBox>
      </ContentItem>
    </ContentSection>
  </BaseTemplate>
  );
}
