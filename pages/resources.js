import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import styles from '../components/Templates/BaseTemplate.module.scss';
import ContentSection from '../components/content/ContentSection/ContentSection';
import InfoBox from '../components/content/InfoBox/InfoBox';
import YoutubeEmbed from "../components/content/YoutubeEmbed/YoutubeEmbed";
import prefix from '../utils/prefix';
import BaseTemplate from './../components/Templates/BaseTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';
import EmailSignup from './../components/content/EmailSignup/EmailSignup';
import cavePic from '../public/images/cave.png';

export default function Resources() {
  return (
    <BaseTemplate title="Resources" description="Game Resources" classes={styles.plainRock}>
      <ContentSection>
        <span className="spacer3" aria-hidden="true"></span>
        <ContentItem>
          <h1 className={styles.logo + " " + styles.tCenter}>Resources</h1>
        </ContentItem>
        <span className="spacer2" aria-hidden="true"></span>
      </ContentSection>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.fullW}>
          <div className={styles.trailer}>
            <YoutubeEmbed videoId='jnfqC_cbxvg' width='900' height='508' isAutoplay={false} controls={true} coverImage={cavePic} />
          </div>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jnfqC_cbxvg?si=A45uegKEV9bfFeHT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <span className="spacer3" aria-hidden="true"></span>
          <InfoBox classes={styles.maxW960 + " " + styles.center}>
            <div className={styles.resourceTiles}>
              <Link href='/resources/rules' className={styles.resourceTile + " " + styles.highlandsTile}>
                <h2>Rules &amp; FAQ</h2>
                <span>Game rules</span>
              </Link>
              <Link href='/resources/patchnotes' className={styles.resourceTile + " " + styles.redSkyTile}>
                <h2>Balance Changes</h2>
                <span>Balance changes and patch notes</span>
              </Link>
              <Link href='/resources/presskit' className={styles.resourceTile + " " + styles.cultistsTile}>
                <h2>Press Kit</h2>
                <span>Press kit and media resources</span>
              </Link>
            </div>
            <span className="spacer2" aria-hidden="true"></span>
            <div className={styles.center + " " + styles.maxW500}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
          </InfoBox>
          <span className="spacer3" aria-hidden="true"></span>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  );
}
