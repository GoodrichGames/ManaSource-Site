import ExportedImage from "next-image-export-optimizer";
import ggLogo from '../public/images/GG-Logo-dark-bg.png';
import styles from '../components/Templates/BaseTemplate.module.scss';
import Button from "../components/content/Button/Button";
import EmailSignup from '../components/content/EmailSignup/EmailSignup';
import infoboxStyles from '../components/content/InfoBox/InfoBox.module.scss';
import YoutubeEmbed from "../components/content/YoutubeEmbed/YoutubeEmbed";
import arrowPic from '../public/icons/Arrow.png';
import agesPic from '../public/icons/ages.png';
import timePic from '../public/icons/hourglass.png';
import playersPic from '../public/icons/players.png';
import cavePic from '../public/images/cave.png';
import prefix from '../utils/prefix';
import NoNavTemplate from './../components/Templates/NoNavTemplate';
import ContentItem from './../components/content/ContentSection/ContentItem';
import ContentSection from './../components/content/ContentSection/ContentSection';
import InfoBox from './../components/content/InfoBox/InfoBox';
import logo from '../public/images/ManaSourceHLogo.png'
import HoverReveal from './../components/content/HoverReveal/HoverReveal';

export default function Landing() {
  return (
    <NoNavTemplate>
      <div className={styles.logo + " " + styles.tCenter + " " + styles.overlayText}>
        <ExportedImage src={logo}
          alt='Mana Source logo'
          height="89"
          priority
          style={{
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain"
          }} />
        <h1 className="hidden">
          Mana Source
        </h1>
      </div>
      <div className={styles.heroImage}>
        <ExportedImage
          src={cavePic}
          alt='mana well in cave'
          height="990"
          priority
          placeholder="blur"
          style={{
            width: "100%",
            objectFit: "cover"
          }} />
        <a className={styles.scrollArrow + " " + styles.offset} href="#main">
          <ExportedImage
            src={arrowPic}
            alt='down arrow'
            height="1"
            width="1"
            priority
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain"
            }} />
        </a>
        <div className={styles.dH0}>
          <InfoBox classes={infoboxStyles.offset}>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={agesPic}
                alt='ages'
                styles={{ objectFit: "contain" }}
                height="50"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} /><br />
              <p><strong>Ages</strong></p>
              <p>13+</p>
            </div>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={playersPic}
                alt='players'
                height="50"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} /><br />
              <p><strong>Players</strong></p>
              <p>1-4</p>
            </div>
            <div className={styles.tCenter + " " + styles.thirdW + " " + styles.inline + " " + styles.vAlignTop + " " + styles.lMH50}>
              <ExportedImage
                src={timePic}
                alt='time to play'
                height="50"
                priority
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain"
                }} /><br />
              <div className={styles.fourtyFiveW + " " + styles.inline}>
                <strong>PvE</strong>
                <p>60-180<br />
                  min</p>
              </div>
              <div className={styles.fourtyFiveW + " " + styles.inline}>
                <strong>PvP</strong>
                <p>20-30<br />
                  min</p>
              </div>
            </div>
            <br />
            <br />
            <p className={styles.fontPhilosopher}>
              <em>
                For thousands of years nations have fought for <strong>mana wells</strong>, which are now essential to modern life. <br />
                Each nation has unique weapons, talents, and battlefield-warping effects to emerge victorious.<br />
                But be careful, each opponent may have a few tricks they&apos;ve picked up from another nation...
              </em>
            </p>
            <br />
            <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game coming to Kickstarter in 2026.</div>
            <div className={styles.maxW500 + " " + styles.center + " " + styles.tCenter}>
              <EmailSignup ctaText="Start your adventure!" />
            </div>
          </InfoBox>
        </div>
      </div>
      <div id="main"></div>
      <ContentSection>
        <ContentSection>
          <ContentItem classes={styles.tCenter + " " + styles.ruinsBg}>
            <InfoBox classes={styles.tCenter}>
              <br />
              <br />
              <br />
              <br />
              <h2>A discovery at an ancient vault may be the last hope of a people driven underground...</h2>
              <br />
            </InfoBox>
            <br />
            <YoutubeEmbed videoId="h9tHSCE1T84" width="900" height="508" isAutoplay={false} controls={true} />
            {/* <YoutubeEmbed videoId="h9tHSCE1T84" width="1920" height="1080" isAutoplay={true} frameborder={false} controls={false} mute={true} showinfo={false} /> */}
            <br />
            <InfoBox classes={styles.tCenter} delay={2}>
              <h2 className={styles.tCenter + " " + styles.medWPadding}>
                <div className={styles.mB10}><span className={styles.fontArkhip}>Mana Source</span> is an adventure board game coming to Kickstarter in 2026.</div>
              </h2>
              <div className={styles.maxW500 + " " + styles.center}>
                <EmailSignup ctaText="Start your adventure!" />
                or<br /><br />
                <p>Join the <a href="https://discord.com/invite/drQDa7MQ3e">official Discord</a> and <a href="https://www.facebook.com/Mana-Source-102398542746103%C2%A0">Facebook</a> to chat with the community. <br /></p>
              </div>
              <Button text='Discover More' classes={styles.center + ' ' + styles.twentyW} onClick={() => { window.location = prefix + '/' }} />
            </InfoBox>
          </ContentItem>
        </ContentSection>
        <ContentSection>
        <h3 className={styles.tCenter}>About Mana Source</h3>
        <ContentItem classes={styles.fullW + " " + styles.flex + " " + styles.minHeight700}>
          <ContentItem classes={styles.redSkyBg + " " + styles.bgCover + " " + styles.fullW}>
            <HoverReveal title="Gameplay">
              <div>
                Combat in <span className={styles.fontArkhip}>Mana Source</span> is highly interactive and euro-inspired.  Players must rely on planning and dynamic execution to win.
                <br />
                <br />
                In the Campaign, a streamlined <strong>solo mode</strong> ensures that you can focus on playing your character. Every action is balanced for head-to-head competitive play.
              </div>
            </HoverReveal>
          </ContentItem>
          <ContentItem classes={styles.highlandsBg + " " + styles.bgCover + " " + styles.fullW}>
            <HoverReveal title="Setting">
              <div>
                <strong><span className={styles.fontArkhip}>Mana Source</span></strong> is a thrilling high-fantasy adventure.  It&apos;s set in a world where nation has ravaged nation following the onset of a mechanical revolution. Join a scrappy group on the outskirts of civilization. As you venture out, you&apos;ll have to explore, solve puzzles, and defeat deadly adversaries if you&apos;re going to survive.
              </div>
            </HoverReveal>
          </ContentItem>
          <ContentItem classes={styles.cultistsBg + " " + styles.bgCover + " " + styles.fullW}>
            <HoverReveal title="Design Philosophy">
              <div className={styles.tLeft}>
                <strong>Light on Core Rules:</strong>  You shouldn&apos;t have to spend hours teaching a game before you can play.
                <br />
                <br />
                <strong>Gradually build complexity:</strong>  Each class begins with low complexity actions in order to make getting started easy. Over the course of the campaign, players unlock new actions, gather resources, and complete challenges that add layers of strategy. Discover new combos while adapting to every unique encounter thrown your way!
                <br />
                <br />
                <strong>Story is a Feature not a Flavor:</strong> Many dungeon crawlers contain only a light, loosely connected narrative. In <span className={styles.fontArkhip}>Mana Source</span> the story, characters, and various twists are a focal point. The story favors a tight, high-quality narrative of over 140,000 words across 20+ scenarios that you&apos;ll remember for years to come.
              </div>
            </HoverReveal>
          </ContentItem>
        </ContentItem>
      </ContentSection >
        <br />
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
        <br />
        <br />
        <br />
      </ContentSection>
    </NoNavTemplate>
  );
}
