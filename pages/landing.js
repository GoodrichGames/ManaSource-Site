import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { useRef } from 'react';
import ggLogo from '../public/images/GG-Logo-dark-bg.png';
import noAIPic from '../public/icons/NoAI.png';
import cavePic from '../public/images/cave.png';
import styles from '../components/Templates/BaseTemplate.module.scss';
import EmailSignup from '../components/content/EmailSignup/EmailSignup';
import YoutubeEmbed from "../components/content/YoutubeEmbed/YoutubeEmbed";
import GameSchema from '../components/content/GameSchema/GameSchema';
import Hero from '../components/content/Hero/Hero';
import ScrollArrow from '../components/content/ScrollArrow/ScrollArrow';
import SocialLinks from '../components/content/SocialLinks/SocialLinks';
import AboutPanels from '../components/content/AboutPanels/AboutPanels';
import BrandName from '../components/content/BrandName/BrandName';
import Descent from '../components/content/Descent/Descent';
import SectionArt from '../components/content/SectionArt/SectionArt';
import SectionHeading from '../components/content/SectionHeading/SectionHeading';
import ClassHand from '../components/content/ClassHand/ClassHand';
import TurnRound from '../components/content/TurnRound/TurnRound';
import LearnToPlay from '../components/content/LearnToPlay/LearnToPlay';
import NoNavTemplate from './../components/Templates/NoNavTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';
import ContentSection from './../components/content/ContentSection/ContentSection';
import InfoBox from './../components/content/InfoBox/InfoBox';
import dynamic from 'next/dynamic'

const LandingAnimation = dynamic(() => import('../components/content/LandingAnimation/LandingAnimation'), { ssr: false })

export default function Landing() {
  const ruinsWindowRef = useRef(null);

  return (
    <NoNavTemplate
      title="Mana Source — Kickstarter Preview"
      description="Discover Mana Source, a story-driven fantasy adventure board game for 1–4 players coming to Kickstarter in early 2027."
      classes={styles.layered}
    >
      <GameSchema />
      <LandingAnimation />
      <Descent />
      <Hero overlayClasses={styles.heroOverlay} />
      <div id="main"></div>
      <ContentSection>
        <ContentItem classes={styles.tCenter + " " + styles.artSection + " " + styles.ruinsSection}>
          <SectionArt classes={styles.ruinsArt} anchorRef={ruinsWindowRef}>
            <div className={styles.torchFlame}></div>
          </SectionArt>
          <h2 className={styles.ruinsHook}>A discovery at an ancient vault may be the last hope of a people driven underground...</h2>
          <div className={styles.trailer}>
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} coverImage={cavePic} />
          </div>
          <h2 className={styles.ruinsPitch}>
            <span className={styles.ruinsPitchLine}><BrandName large /> is an adventure board game with a story-driven campaign, dual-class character building, and simultaneous turns coming to Kickstarter in early 2027.</span>
            <span className={styles.ruinsCall}>You&apos;ll need to work together if you&apos;re going to survive.</span>
          </h2>
          <ScrollArrow href="#signup" classes={styles.sectionArrow} />
          <div id="signup" className={styles.anchorTarget}></div>
          <div ref={ruinsWindowRef} className={styles.ruinsWindow} aria-hidden="true"></div>
          <InfoBox variant="banner" classes={styles.tCenter}>
            <div className={styles.signupFeatures}>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500 + " " + styles.signupFeature}>
                <EmailSignup ctaText="Start your adventure!" />
              </div>
              <div className={styles.thirdW + " " + styles.inline + " " + styles.maxW500 + " " + styles.signupFeature}>
                <ExportedImage
                  src={noAIPic}
                  alt='No AI art'
                  height={0}
                  width={0}
                  sizes="128px"
                  unoptimized={true}
                  style={{
                    width: "7rem",
                    height: "auto",
                    objectFit: "contain"
                  }} />
                <div>
                  <div><em>We&apos;re committed to art for humans by humans.<br /><br />The Mana Source board game contains<br />zero AI-generated art, cards, or writing.</em></div>
                </div>
              </div>
            </div>
            <TurnRound />
            <LearnToPlay />
            <h4 className={styles.groupTitle}>Classes</h4>
            <ClassHand />
            <div className={styles.maxW500 + " " + styles.center}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
            <div className={styles.tCenter + " " + styles.maxW960 + " " + styles.center}>
              <ScrollArrow href="#learnmore" classes={styles.sectionArrow} preload={true} />
            </div>
          </InfoBox>
        </ContentItem>
      </ContentSection>
      <div id="learnmore" className={styles.anchorTarget}></div>
      <ContentSection>
        <SectionHeading>About Mana Source</SectionHeading>
        <AboutPanels />
        <span className="spacer1" aria-hidden="true"></span>
      </ContentSection>
      <ContentSection>
        <ContentItem classes={styles.tCenter}>
          <div className={styles.maxW500 + " " + styles.center}>
            <SocialLinks />
          </div>
          <span className="spacer1" aria-hidden="true"></span>
          <Link href="/" className={styles.discoverMore}>Discover More</Link>
          <span className="spacer2" aria-hidden="true"></span>
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
        </ContentItem>
      </ContentSection>
    </NoNavTemplate>
  );
}
