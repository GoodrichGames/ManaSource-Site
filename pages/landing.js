import ExportedImage from "next-image-export-optimizer";
import ggLogo from '../public/images/GG-Logo-dark-bg.png';
import styles from '../components/Templates/BaseTemplate.module.scss';
import Button from "../components/content/Button/Button";
import EmailSignup from '../components/content/EmailSignup/EmailSignup';
import YoutubeEmbed from "../components/content/YoutubeEmbed/YoutubeEmbed";
import GameSchema from '../components/content/GameSchema/GameSchema';
import Hero from '../components/content/Hero/Hero';
import SocialLinks from '../components/content/SocialLinks/SocialLinks';
import AboutPanels from '../components/content/AboutPanels/AboutPanels';
import prefix from '../utils/prefix';
import NoNavTemplate from './../components/Templates/NoNavTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';
import ContentSection from './../components/content/ContentSection/ContentSection';
import InfoBox from './../components/content/InfoBox/InfoBox';
import dynamic from 'next/dynamic'

const LandingAnimation = dynamic(() => import('../components/content/LandingAnimation/LandingAnimation'), { ssr: false })

export default function Landing() {
  return (
    <NoNavTemplate
      title="Mana Source — Kickstarter Preview"
      description="Discover Mana Source, a story-driven fantasy adventure board game for 1–4 players coming to Kickstarter in early 2027."
    >
      <GameSchema />
      <LandingAnimation />
      <Hero>
        <span className="spacer1" aria-hidden="true"></span>
        <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game with a story-driven campaign, dual-class character building, and simultaneous turns coming to Kickstarter in early 2027.</div>
        <div className={styles.maxW500 + " " + styles.center + " " + styles.tCenter}>
          <EmailSignup ctaText="Start your adventure!" />
        </div>
      </Hero>
      <div id="main"></div>
      <ContentSection>
        <ContentSection>
          <ContentItem classes={styles.tCenter + " " + styles.ruinsBg}>
            <InfoBox classes={styles.tCenter}>
              <span className="spacer4" aria-hidden="true"></span>
              <h2>A discovery at an ancient vault may be the last hope of a people driven underground...</h2>
              <span className="spacer1" aria-hidden="true"></span>
            </InfoBox>
            <span className="spacer1" aria-hidden="true"></span>
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} />
            {/* <YoutubeEmbed videoId="h9tHSCE1T84" width="1920" height="1080" isAutoplay={true} frameborder={false} controls={false} mute={true} showinfo={false} /> */}
            <span className="spacer1" aria-hidden="true"></span>
            <InfoBox classes={styles.tCenter} delay={2}>
              <h2 className={styles.tCenter + " " + styles.medWPadding}>
                <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game coming to Kickstarter in early 2027.</div>
              </h2>
              <div className={styles.maxW500 + " " + styles.center}>
                <EmailSignup ctaText="Start your adventure!" />
                <SocialLinks />
                <span className="spacer2" aria-hidden="true"></span>
              </div>
              <Button text='Discover More' classes={styles.center + ' ' + styles.twentyW} onClick={() => { window.location = prefix + '/' }} />
            </InfoBox>
          </ContentItem>
        </ContentSection>
        <ContentSection>
          <h3 className={styles.tCenter}>About Mana Source</h3>
          <AboutPanels />
        </ContentSection >
        <span className="spacer1" aria-hidden="true"></span>
        <div className={styles.fullW + " " + styles.tCenter}>
          <ExportedImage
            src={ggLogo}
            alt='Goodrich Games Logo'
            width={0}
            height={100}
            style={{
              objectFit: "contain",
            }} />
        </div>
        <span className="spacer2" aria-hidden="true"></span>
      </ContentSection>
    </NoNavTemplate>
  );
}
