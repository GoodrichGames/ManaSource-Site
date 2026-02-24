import dynamic from 'next/dynamic';
import ArticleList from '../../components/content/ArticleList/ArticleList';
import BaseTemplate from '../../components/Templates/BaseTemplate';
import styles from '../../components/Templates/BaseTemplate.module.scss';
import ContentItem from './../../components/content/ContentSection/ContentItem';
import ContentSection from './../../components/content/ContentSection/ContentSection';
import InfoBox from './../../components/content/InfoBox/InfoBox';
import Link from 'next/link';

const PushSignup = dynamic(() => import('../../components/Structural/PushSignup'), { ssr: false });

export default function Patchnotes() {
  return (
    <BaseTemplate title="Patchnotes" description="Balance changes and patchnotes">
      <ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContentItem>
          <h1 className={styles.logo + " " + styles.tCenter}>Patch Notes</h1>
        </ContentItem>
        <br />
        <br />
      </ContentSection>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.assassinBg + " " + styles.fullW}>
          <InfoBox classes={styles.fullW}>

            <p>Come back when the game launches to view the official patchnotes. You can enable notifications for important updates below.</p>

            <ContentItem>
              <ArticleList category={'patchnotes'} max={10} />
              <Link href='/resources/patchnotes/cumulative'>
                <h2>View Cumulative Balance Changes</h2>
              </Link>
            </ContentItem>
          </InfoBox>
        </ContentItem>

        <br />
        <br />
        <br />

        <PushSignup />
      </ContentSection>
    </BaseTemplate>
  )
}

