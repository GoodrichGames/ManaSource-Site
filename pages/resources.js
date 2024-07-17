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

export default function Resources() {
  return (
    <BaseTemplate title="Resources" description="Game Resources">
      <ContentSection>
        <br />
        <br />
        <br />
        <br />
        <br />
        <ContentItem>
          <h1 className={styles.logo + " " + styles.tCenter}>Resources</h1>
        </ContentItem>
        <br />
        <br />
      </ContentSection>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.assassinBg + " " + styles.fullW}>
          <InfoBox classes={styles.fullW}>
            <ContentItem>
              <br />
              <div className={styles.ld50}>
                <div className={styles.center}>
                  <YoutubeEmbed videoId='jnfqC_cbxvg' width='560' height='315' isAutoPlay={false} />
                </div>
              </div>
              <div className={styles.ld50} style={{ height: '315px' }}>
                <ExportedImage
                  src={prefix + '/images/HowToPlay.PNG'}
                  alt='Image of how cards move down the recharge zone when played'
                  priority={true}
                  fill
                  style={{
                    objectFit: "contain",
                  }} />
              </div>
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jnfqC_cbxvg?si=A45uegKEV9bfFeHT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            </ContentItem>
            <br />
            <br />
            <ContentItem>
              <Link href='/resources/rules'>
                <h2>Rules &amp; FAQ</h2>
              </Link>
              <Link href='/resources/patchnotes'>
                <h2>Balance Changes</h2>
              </Link>
            </ContentItem>
            <br />
            <br />
            <div className={styles.center + " " + styles.maxW500}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
          </InfoBox>
        </ContentItem>
      </ContentSection>
    </BaseTemplate>
  );
}
